import { FastifyReply } from "fastify";
import prismaClient from "../../prisma/connectPrisma";

interface UserProps {
    name: string,
    email: string,
    hashedPassword: string,
};

class CreateUserService {
    async execute({ name, email, hashedPassword }: UserProps, response: FastifyReply) {
        if (!name || !email) {
            throw new Error("The name and email field need to be defined");
        }

        const findUser = await prismaClient.user.findFirst({ where: { email: email }});

        if (!findUser) {
            const user = prismaClient.user.create({
                data: {
                    name: name,
                    email: email,
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