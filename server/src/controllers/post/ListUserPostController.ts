import { FastifyReply, FastifyRequest } from "fastify";
import { ListUserPostService } from "../../services/post/ListUserPostService";

interface PostProps {
    userId: string
}

class ListUserPostController {
    async handleListUserPosts(request: FastifyRequest, response: FastifyReply) {
        const { userId } = request.body as PostProps;

        const listUserPostsService = new ListUserPostService();
        const userPosts = await listUserPostsService.execute({ userId });

        response.send(userPosts);
    };
};

export { ListUserPostController };