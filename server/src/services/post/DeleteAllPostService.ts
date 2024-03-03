import prismaClient from "../../prisma/connectPrisma"

interface UserProps {
    userId: string
};

class DeleteAllPostService {
    async execute({ userId }: UserProps) {
        const deletePosts = await prismaClient.post.deleteMany({ where: { userId: userId }});
        return deletePosts;
    };
};

export { DeleteAllPostService };