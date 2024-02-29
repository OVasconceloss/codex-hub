import { 
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyRequest, 
    FastifyReply 
} from "fastify";
import { CreateUserController } from "./controllers/CreateUserController";

export async function fastifyRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    //ROUTE FOR CREATE USER
    fastify.post('/user', async (request: FastifyRequest, response: FastifyReply) => {
        return new CreateUserController().handleCreateUser(request, response);
    });
};