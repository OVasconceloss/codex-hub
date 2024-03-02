import { FastifyRequest, FastifyReply } from 'fastify';
import { ListUserService } from '../../services/user/ListUserService';

class ListUserController {
    async handleListUsers(request: FastifyRequest, response: FastifyReply) {
        const listUserService = new ListUserService();

        const users = await listUserService.excute();

        response.send(users);
    };
};

export { ListUserController };