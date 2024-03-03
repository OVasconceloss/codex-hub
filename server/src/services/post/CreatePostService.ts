import prismaClient from "../../prisma/connectPrisma";

interface PostProps {
    title: string,
    text: string,
    userId: string
};

class CreatePostService {
    async execute({ title, text, userId }: PostProps) {
        const post = await prismaClient.post.create({
            data: {
                title: title,
                text: text,
                userId: userId
            }
        });

        return post;
    };
};

export { CreatePostService };