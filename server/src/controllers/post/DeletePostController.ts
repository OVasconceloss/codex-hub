import { FastifyReply, FastifyRequest } from "fastify";
import { DeletePostService } from "../../services/post/DeletePostService";

interface PostProps {
    postId: string;
};

class DeletePostController {
    async handleDeletePost(request: FastifyRequest, response: FastifyReply) {
        const { postId } = request.body as PostProps;

        const deleteService = new DeletePostService();
        const deletePost = await deleteService.execute({ postId });

        response.send({message: 'Post deleted successfully!'});
    };
};

export { DeletePostController };