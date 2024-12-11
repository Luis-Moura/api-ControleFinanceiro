import Fastify from 'fastify';
import prismaPlugin from './plugins/prisma';
import routes from './routes/index';

const server = Fastify();

server.register(prismaPlugin);
server.register(routes);

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
