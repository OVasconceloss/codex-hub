import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/user/CreateUserService";

interface UserProps {
    name: string,
    email: string
};

class CreateUserController {
    async handleCreateUser(request: FastifyRequest, response: FastifyReply) {
        const { name, email } = request.body as UserProps;

        const userService = new CreateUserService();
        const user = await userService.execute({ name, email });

        response.send(user);
    };
};

export { CreateUserController };