import prismaClient from "../../prisma/connectPrisma";

interface UserProps {
    name: string,
    email: string,
    userId: string,
};

class UpdateUserService {
    async execute({ userId, name, email }: UserProps) {
        if (!name || !email)
            throw new Error("The name and email field need to be defined");

        const findUser = await prismaClient.user.findMany({ where: { id: userId } });

        if (findUser) {
            const updateUser = await prismaClient.user.update({
                where: {
                    id: userId,
                },
                data: {
                    name: name,
                    email: email
                }
            });

            return updateUser;
        };
    };
};

export { UpdateUserService };