import prismaClient from "../../prisma/connectPrisma";

interface UserProps {
    name: string,
    email: string,
    hashedPassword: string,
};

class CreateUserService {
    async execute({ name, email, hashedPassword }: UserProps) {
        if (!name || !email) {
            throw new Error("The name and email field need to be defined");
        }

        const user = prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            }
        });

        return user;
    };
};

export { CreateUserService };