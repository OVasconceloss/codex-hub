import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { fastifyPostRoutes, fastifyUserRoutes } from './routes';

const fastifyServer = Fastify();

const startServer = async () => {
    await fastifyServer.register(fastifyCors);
    await fastifyServer.register(fastifyUserRoutes);
    await fastifyServer.register(fastifyPostRoutes);

    try {
        await fastifyServer.listen({ port: 8080 });
        console.log(`The server was started on PORT 8080`);
    } catch (errorStartServer) {
        console.log(`There was an error initializing the server: ${errorStartServer}`);
        process.exit(1);
    }
};

startServer();