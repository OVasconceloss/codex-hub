import { 
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyRequest, 
    FastifyReply 
} from "fastify";
import { ListUserController } from "./controllers/user/ListUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

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
    fastify.put('/user/update', async (request: FastifyRequest, response: FastifyReply) =>{
        return new UpdateUserController().handleUpdateUser(request, response);
    });

    //ROUTE FOR DELETE USER
    fastify.post('/user/delete', async (request: FastifyRequest, response: FastifyReply) => {
        return new DeleteUserController().handleDeleteUser(request, response);
    });
};