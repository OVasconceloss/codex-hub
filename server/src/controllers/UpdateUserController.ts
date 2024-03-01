import { FastifyRequest, FastifyReply } from 'fastify';
import { UpdateUserService } from '../services/UpdateUserService';

interface UserProps {
    name: string,
    email: string,
    userId: string,
};

class UpdateUserController {
    async handleUpdateUser(request: FastifyRequest, response: FastifyReply) {
        const { userId, name, email } = request.body as UserProps;

        const updateService = new UpdateUserService();
        const updateUser = await updateService.execute({ userId, name, email });

        response.send(updateUser);
    };
};

export { UpdateUserController };