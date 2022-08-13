// import { createBookMutationResolver } from '@src/graphql/schema/resolvers/mutation/createBookMutation';
// import { createAuthorMutationResolver } from '@src/graphql/schema/resolvers/mutation/createAuthorMutation';

import { GraphQLObjectType } from 'graphql';
import createUserMutation from './createUserMutation';

// const mutation = {
//   createBook: {
//     resolve: createBookMutationResolver,
//   },
//   createAuthor: {
//     resolve: createAuthorMutationResolver,
//   },
// };

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
  },
});

export default mutation;
