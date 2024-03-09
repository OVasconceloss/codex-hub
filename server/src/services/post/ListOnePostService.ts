import prismaClient from "../../prisma/connectPrisma";

interface PostProps {
    postId: string
}

class ListOnePostService {
    async execute({ postId }: PostProps) {
        const postData = await prismaClient.post.findFirst({ where: { id: postId } });
        return postData;
    }
}

export { ListOnePostService }