import prismaClient from "../../prisma/connectPrisma";

interface PostProps {
    title: string,
    text: string,
    userId: string,
};

class CreatePostService {
    async execute({ title, text, userId }: PostProps) {
        const findUser = await prismaClient.user.findFirst({ where: { id: userId }});

        const post = await prismaClient.post.create({
            data: {
                title: title,
                text: text,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });

        return post;
    };
};

export { CreatePostService };