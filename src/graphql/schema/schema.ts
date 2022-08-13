import { GraphQLSchema } from 'graphql';
import query from './resolvers/query/query';

const schema: GraphQLSchema = new GraphQLSchema({
  query,
});

export default schema;
