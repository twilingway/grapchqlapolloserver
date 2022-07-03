import { ApolloServer, gql } from 'apollo-server';

const books = [
  {
    title: 'The First',
    author: 'Kate Chopin',
  },

  {
    title: 'The Second',
    author: 'Paul Auster',
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // playground: process.env.NODE_ENV !== 'production',
  csrfPrevention: true,
  cache: 'bounded',
});

server
  .listen()
  .then(({ url }) => {
    console.log(`Server ready at :>> ${url}graphql`);
  })
  .catch(error => console.log('Error launching server', error));
