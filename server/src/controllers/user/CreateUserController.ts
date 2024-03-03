import bcrypt from 'bcrypt';
import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/user/CreateUserService";

interface UserProps {
    email: string,
    password: string,
    fullname: string,
    nickname: string,
    hashedPassword: string,
};

class CreateUserController {
    async handleCreateUser(request: FastifyRequest, response: FastifyReply) {
        const { fullname, nickname, email, password } = request.body as UserProps;

        const hashedPassword = await bcrypt.hash(password, 10);

        const userService = new CreateUserService();
        const user = await userService.execute({ fullname, nickname, email, hashedPassword }, response);

        response.send(user);
    };
};

export { CreateUserController };