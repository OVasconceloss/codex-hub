import prismaClient from "../../prisma/connectPrisma";

interface UserProps {
    email: string,
    userId: string,
    fullname: string,
};

class UpdateUserService {
    async execute({ userId, fullname, email }: UserProps) {
        if (!fullname || !email)
            throw new Error("The full name and email field need to be defined");

        const findUser = await prismaClient.user.findMany({ where: { id: userId } });

        if (findUser) {
            const updateUser = await prismaClient.user.update({
                where: {
                    id: userId,
                },
                data: {
                    email: email,
                    fullname: fullname,
                }
            });

            return updateUser;
        };
    };
};

export { UpdateUserService };