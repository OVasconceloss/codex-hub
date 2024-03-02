require('dotenv').config();
import bcrypt from 'bcrypt';
import jasonWebToken from 'jsonwebtoken';
import prismaClient from "../../../prisma/connectPrisma";

interface UserProps {
    name: string,
    password: string
};

class LoginUserSerivce {
    async execute({password, name}: UserProps) {
        const finduser = await prismaClient.user.findFirst({ where: { name: name } });

        if (finduser) {
            if (!process.env.TOKEN_SECRET) console.log('error');
            else {
                const matchPassword = await bcrypt.compare(password, finduser.password);
                const accessToken = jasonWebToken.sign(JSON.stringify(finduser), process.env.TOKEN_SECRET);
    
                if (matchPassword) return { accessToken: accessToken };
                else return { message: "Invalid Credentials" };
            };
        };
    };
};

export { LoginUserSerivce };