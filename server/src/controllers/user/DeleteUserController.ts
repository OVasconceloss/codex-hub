import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteUserService } from '../../services/user/DeleteUserService';

interface UserProps {
    userId: string
};

class DeleteUserController {
    async handleDeleteUser(request: FastifyRequest, response: FastifyReply) {
        const { userId } = request.body as UserProps;

        const deleteService = new DeleteUserService();
        const deleteUser = await deleteService.execute({ userId });

        response.send({message: 'User deleted successfully!'});
    };
};

export { DeleteUserController };