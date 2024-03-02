import prismaClient from "../../prisma/connectPrisma";

interface UserProps {
    name: string,
    email: string
};

class CreateUserService {
    async execute({ name, email }: UserProps) {
        if (!name || !email) {
            throw new Error("The name and email field need to be defined");
        }

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                status: true
            }
        });

        return user;
    };
};

export { CreateUserService };