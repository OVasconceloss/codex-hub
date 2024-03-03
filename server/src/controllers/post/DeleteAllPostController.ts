import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteAllPostService } from "../../services/post/DeleteAllPostService";

interface PostProps {
    userId: string
};

class DeleteAllPostController {
    async handleDeleteAllPost(request: FastifyRequest, response: FastifyReply) {
        const { userId } = request.body as PostProps;

        const deleteService = new DeleteAllPostService();
        const deleteAll = await deleteService.execute({ userId });

        response.send({message: 'All posts deleted successfully'});
    };
};

export { DeleteAllPostController };