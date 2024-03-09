require('dotenv').config();
import bcrypt from 'bcrypt';
import { FastifyReply } from 'fastify';
import jasonWebToken from 'jsonwebtoken';
import prismaClient from "../../../prisma/connectPrisma";

interface UserProps {
    email: string,
    password: string
};

class LoginUserSerivce {
    async execute({password, email}: UserProps, response: FastifyReply) {
        const finduser = await prismaClient.user.findFirst({ where: { email: email } });

        if (finduser) {
            if (!process.env.TOKEN_SECRET) {
                console.log('Error: TOKEN_SECRET Not Found');
                return response.code(500).send({ error: 'Internal Server Error'});
            }
            
            const matchPassword = await bcrypt.compare(password, finduser.password);
    
            if (matchPassword) {
                const accessToken = jasonWebToken.sign(JSON.stringify(finduser), process.env.TOKEN_SECRET);
                response.header('authorization', `Bearer ${accessToken}`);

                return response.send({ accessToken, finduser });
            } else {
                return response.code(401).send({ error: "Invalid Credentials" });
            };
        } else {
            return response.code(404).send({ error: 'User Not Found' });
        }
    };
};

export { LoginUserSerivce };