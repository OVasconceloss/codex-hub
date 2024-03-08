import { FastifyReply } from "fastify";
import prismaClient from "../../prisma/connectPrisma";

interface UserProps {
    email: string,
    fullname: string,
    nickname: string,
    hashedPassword: string,
};

class CreateUserService {
    async execute({ fullname, nickname, email, hashedPassword }: UserProps, response: FastifyReply) {
        if (!fullname || !nickname || !email) {
            throw new Error("The full name, nickname and email field need to be defined");
        }

        const findUser = await prismaClient.user.findFirst({ where: { email: email }});

        if (!findUser) {
            const user = prismaClient.user.create({
                data: {
                    email: email,
                    fullname: fullname,
                    nickname: nickname,
                    password: hashedPassword,
                }
            });

            return user;
        } else {
            return response.code(400).send({ error: 'This user already exists'});
        }
    };
};

export { CreateUserService };