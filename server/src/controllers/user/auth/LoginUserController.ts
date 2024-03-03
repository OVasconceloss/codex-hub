import { FastifyRequest, FastifyReply } from "fastify";
import { LoginUserSerivce } from "../../../services/user/auth/LoginUserService";

interface UserProps {
    email: string,
    password: string
}

class LoginUserController {
    async handleLoginUser(request: FastifyRequest, response: FastifyReply) {
        const { email, password } = request.body as UserProps;

        const loginService = new LoginUserSerivce();
        const login = await loginService.execute({ email, password }, response);

        response.send(login);
    };
};

export { LoginUserController };