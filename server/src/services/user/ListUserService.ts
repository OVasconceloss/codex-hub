import prismaClient from "../../prisma/connectPrisma";

class ListUserService {
    async excute() {
        const users = await prismaClient.user.findMany();
        return users;
    };
};

export { ListUserService };