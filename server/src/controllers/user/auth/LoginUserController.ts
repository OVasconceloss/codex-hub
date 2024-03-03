import { FastifyRequest, FastifyReply } from "fastify";
import { LoginUserSerivce } from "../../../services/user/auth/LoginUserService";

interface UserProps {
    name: string,
    password: string
}

class LoginUserController {
    async handleLoginUser(request: FastifyRequest, response: FastifyReply) {
        const { name, password } = request.body as UserProps;

        const loginService = new LoginUserSerivce();
        const login = await loginService.execute({ name, password }, response);

        response.send(login);
    };
};

export { LoginUserController };