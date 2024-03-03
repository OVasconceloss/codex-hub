import prismaClient from "../../prisma/connectPrisma";

interface PostProps {
    postId: string
};

class DeletePostService {
    async execute({ postId }: PostProps) {
        const deletePost = await prismaClient.post.delete({
            where: {
                id: postId
            }
        });

        return deletePost;
    };
};

export { DeletePostService };