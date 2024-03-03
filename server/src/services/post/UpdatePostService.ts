import prismaClient from "../../prisma/connectPrisma";

interface PostProps {
    title: string,
    text: string,
    postId: string
};

class UpdatePostService {
    async execute({ postId, title, text }: PostProps) {
        const findPost = await prismaClient.post.findFirst({ where: { id: postId }});

        if (findPost) {
            const updatePost = await prismaClient.post.update({
                where: {
                    id: postId
                },
                data: {
                    title: title,
                    text: text
                }
            });

            return updatePost;
        }
    };
};

export { UpdatePostService };