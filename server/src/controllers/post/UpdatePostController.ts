import { FastifyReply, FastifyRequest } from "fastify";
import { UpdatePostService } from "../../services/post/UpdatePostService";

interface PostProps {
    title: string,
    text: string,
    postId: string,
};

class UpdatePostController {
    async handleUpdatePost(request: FastifyRequest, response: FastifyReply) {
        const { postId, title, text } = request.body as PostProps;

        const updateService = new UpdatePostService();
        const updatePost = await updateService.execute({ postId, title, text });

        response.send(updatePost);
    };
};

export { UpdatePostController };