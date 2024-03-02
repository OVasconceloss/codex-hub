import prismaClient from "../../prisma/connectPrisma";

interface UserProps {
    userId: string
};

class DeleteUserService {
    async execute({ userId }: UserProps) {
        const deleteUser = await prismaClient.user.delete({
            where: {
                id: userId
            }
        });

        return deleteUser;
    };
};

export { DeleteUserService };