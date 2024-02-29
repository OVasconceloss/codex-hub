import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
    async handleCreateUser(request: FastifyRequest, response: FastifyReply) {
        const userService = new CreateUserService();

        const user = await userService.execute();
        response.send(user);
    };
};

export { CreateUserController };