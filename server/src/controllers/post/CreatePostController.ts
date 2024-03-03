import {FastifyRequest, FastifyReply } from "fastify";
import { CreatePostService } from "../../services/post/CreatePostService";

interface PostsProps {
    text: string,
    title: string,
    userId: string,
    nickname: string
}

class CreatePostController {
    async handleCreatePost(request: FastifyRequest, response: FastifyReply) {
        const { title, text, userId, nickname } = request.body as PostsProps;

        const postService = new CreatePostService();
        const post = await postService.execute({ title, text, userId, nickname });

        response.send(post);
    };
};

export { CreatePostController };