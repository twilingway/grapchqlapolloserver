import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import { performAstCodegen } from './codegen';
import schema from './graphql/schema/schema';
import { IApolloServerContext } from './interfaces/IApolloServerContext';
import prisma from '@src/prisma/client';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const context: IApolloServerContext = {
    prisma,
  };

  const server = new ApolloServer({
    schema,
    // playground: process.env.NODE_ENV !== 'production',
    csrfPrevention: true,
    cache: 'bounded',
    context,
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`Server ready at :>> ${url}graphql`);
    })
    .catch((error) => console.log('Error launching server', error));
};

startServer();
