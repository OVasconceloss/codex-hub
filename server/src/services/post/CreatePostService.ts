import prismaClient from "../../prisma/connectPrisma";

interface PostProps {
    text: string,
    title: string,
    userId: string,
    nickname: string,
};

class CreatePostService {
    async execute({ title, text, nickname, userId }: PostProps) {
        const findUser = await prismaClient.user.findFirst({ where: { id: userId }});

        const post = await prismaClient.post.create({
            data: {
                text: text,
                title: title,
                userNickname: nickname,
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