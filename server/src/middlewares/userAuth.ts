import jasonWebToken from 'jsonwebtoken';
import { FastifyRequest, FastifyReply } from 'fastify';

export async function authenticateUser(request: FastifyRequest, response: FastifyReply) {
    const authorizationHeader = request.headers['authorization'];

    if (!authorizationHeader) {
        return response.code(401).send({ error: 'Unauthorized - Access Token is Missing'});
    };

    const [ bearer, token ] = authorizationHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
        return response.code(401).send({ error: 'Unauthorized - Invalid Access Token format'});
    }

    try {
        if (process.env.TOKEN_SECRET) {
            const tokenDecoded = jasonWebToken.verify(token, process.env.TOKEN_SECRET);
            
            request.accessToken = tokenDecoded;
            return;
        }
    } catch (error) {
        response.code(401).send({ erro: 'Unauthorized - Invalid Access Token'});
        return;
    }
};