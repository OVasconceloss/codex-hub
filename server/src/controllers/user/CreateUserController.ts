import bcrypt from 'bcrypt';
import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/user/CreateUserService";

interface UserProps {
    name: string,
    email: string,
    password: string,
    hashedPassword: string,
};

class CreateUserController {
    async handleCreateUser(request: FastifyRequest, response: FastifyReply) {
        const { name, email, password } = request.body as UserProps;

        const hashedPassword = await bcrypt.hash(password, 10);

        const userService = new CreateUserService();
        const user = await userService.execute({ name, email, hashedPassword });

        response.send(user);
    };
};

export { CreateUserController };