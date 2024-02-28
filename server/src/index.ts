import Fastify from 'fastify';

const fastifyServer = Fastify({ logger: true });

const startServer = async () => {
    try {
        await fastifyServer.listen({ port: 8080 });
        console.log(`The server was started on PORT 8080`);
    } catch (errorStartServer) {
        console.log(`There was an error initializing the server: ${errorStartServer}`);
        process.exit(1);
    }
};

startServer();