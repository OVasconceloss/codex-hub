import { FastifyReply, FastifyRequest } from "fastify";
import { ListOnePostService } from "../../services/post/ListOnePostService";

interface PostProps {
    postId: string
}

class ListOnePostController {
    async handleListOnePost(request: FastifyRequest, response: FastifyReply) {
        const { postId } = request.params as PostProps;

        const listOnePostService = new ListOnePostService();
        const postData = await listOnePostService.execute({ postId });

        response.send(postData);
    };
};

export { ListOnePostController };