import prismaClient from "../../prisma/connectPrisma";

class ListPostService {
    async execute() {
        const posts = await prismaClient.post.findMany();
        return posts;
    };
};

export { ListPostService };