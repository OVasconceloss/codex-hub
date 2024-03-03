import { FastifyReply, FastifyRequest } from "fastify";
import { ListPostService } from "../../services/post/ListPostService";

class ListPostController {
    async handleListPosts(request: FastifyRequest, response: FastifyReply) {
        const listPostService = new ListPostService();
        const posts = await listPostService.execute();

        response.send(posts);
    };
};

export { ListPostController };