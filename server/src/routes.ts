import { 
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyRequest, 
    FastifyReply,    
} from "fastify";
import { authenticateUser } from "./middlewares/userAuth";
import { FastifyRequestType } from "fastify/types/type-provider";
import { ListUserController } from "./controllers/user/ListUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { LoginUserController } from "./controllers/user/auth/LoginUserController";
import { CreatePostController } from "./controllers/post/CreatePostController";
import { ListPostController } from "./controllers/post/ListPostController";
import { DeletePostController } from "./controllers/post/DeletePostController";

interface CustomRequest extends FastifyRequestType { accessToken: any; }
declare module 'fastify' { interface FastifyRequest extends CustomRequest {} }

export async function fastifyUserRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    //ROUTE FOR CREATE USER
    fastify.post('/register', async (request: FastifyRequest, response: FastifyReply) => {
        return new CreateUserController().handleCreateUser(request, response);
    });

    //ROUTE FOR LOGIN USER
    fastify.post('/user/login', async (request: FastifyRequest, response: FastifyReply) => {
        return new LoginUserController().handleLoginUser(request, response);
    });

    //ROUTE FOR SHOW USER
    fastify.get('/users', { preHandler: authenticateUser }, async (request: FastifyRequest, response: FastifyReply) => {
        return new ListUserController().handleListUsers(request, response);
    });

    //ROUTE FOR UPDATE USER
    fastify.put('/user/update', { preHandler: authenticateUser }, async (request: FastifyRequest, response: FastifyReply) =>{
        return new UpdateUserController().handleUpdateUser(request, response);
    });

    //ROUTE FOR DELETE USER
    fastify.post('/user/delete', { preHandler: authenticateUser }, async (request: FastifyRequest, response: FastifyReply) => {
        return new DeleteUserController().handleDeleteUser(request, response);
    });
};

export async function fastifyPostRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post('/post', async (request: FastifyRequest, response: FastifyReply) => {
        return new CreatePostController().handleCreatePost(request, response);
    });

    fastify.get('/posts', async (request: FastifyRequest, response: FastifyReply) => {
        return new ListPostController().handleListPosts(request, response);
    });

    fastify.post('/post/delete', async (request: FastifyRequest, response: FastifyReply) => {
        return new DeletePostController().handleDeletePost(request, response);
    });
};