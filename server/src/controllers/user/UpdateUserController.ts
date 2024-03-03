import { FastifyRequest, FastifyReply } from 'fastify';
import { UpdateUserService } from '../../services/user/UpdateUserService';

interface UserProps {
    email: string,
    userId: string,
    fullname: string,
};

class UpdateUserController {
    async handleUpdateUser(request: FastifyRequest, response: FastifyReply) {
        const { userId, fullname, email } = request.body as UserProps;

        const updateService = new UpdateUserService();
        const updateUser = await updateService.execute({ userId, fullname, email });

        response.send(updateUser);
    };
};

export { UpdateUserController };