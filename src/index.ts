import { ApolloServer } from 'apollo-server';
import { performAstCodegen } from './codegen';
// import dotenv from 'dotenv-safe';
import schema from './graphql/schema/schema';

// dotenv.config();

const server = new ApolloServer({
  schema,
  // playground: process.env.NODE_ENV !== 'production',
  csrfPrevention: true,
  cache: 'bounded',
});

performAstCodegen();

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at :>> ${url}graphql`);
  })
  .catch((error) => console.log('Error launching server', error));
