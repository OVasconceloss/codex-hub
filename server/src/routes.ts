import { 
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyRequest, 
    FastifyReply 
} from "fastify";
import { ListUserController } from "./controllers/ListUserController";
import { CreateUserController } from "./controllers/CreateUserController";

export async function fastifyRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    //ROUTE FOR CREATE USER
    fastify.post('/user', async (request: FastifyRequest, response: FastifyReply) => {
        return new CreateUserController().handleCreateUser(request, response);
    });

    //ROUTE FOR SHOW USER
    fastify.get('/users', async (request: FastifyRequest, response: FastifyReply) => {
        return new ListUserController().handleListUsers(request, response);
    });

    //ROUTE FOR UPDATE USER

    //ROUTE FOR DELETE USER
};