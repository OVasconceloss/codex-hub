import {FastifyRequest, FastifyReply } from "fastify";
import { CreatePostService } from "../../services/post/CreatePostService";

interface PostsProps {
    title: string,
    text: string,
    userId: string
}

class CreatePostController {
    async handleCreatePost(request: FastifyRequest, response: FastifyReply) {
        const { title, text, userId } = request.body as PostsProps;

        const postService = new CreatePostService();
        const post = await postService.execute({ title, text, userId });

        response.send(post);
    };
};

export { CreatePostController };