import prismaClient from "../../prisma/connectPrisma";

interface UserProps {
    userId: string
};

class ListUserPostService {
    async execute({ userId }: UserProps) {
        const userPosts = await prismaClient.post.findMany({ where: { userId: userId } });
        return userPosts;
    };
};

export { ListUserPostService };