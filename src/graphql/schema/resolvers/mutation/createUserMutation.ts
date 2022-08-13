/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client';
import { GraphQLNonNull } from 'graphql';
import { createUser } from '@src/data/userService';
import CreateUserInput from '../../typedefs/CreateUserInput';
import UserType from '../../typedefs/GqlUser';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';

// export const createUserMutationResolver: GraphQLFieldResolver<unknown, IApolloServerContext> = async (
//   _source,
//   { input: { title, authorId } },
//   _context,
//   _info
// ): Promise<User> => {
//   return createUser(title, authorId);
// };

// const createUserMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
//   description: 'Create user',
//   type: UserType,
//   args: {
//     input: {
//       type: CreateBookInput,
//     },
//   },
//   resolve: createUserMutationResolver,
// };

const createUserMutation = {
  type: UserType,
  args: {
    input: {
      type: new GraphQLNonNull(CreateUserInput),
      description: 'User input to be created',
    },
  },
  resolve: async (
    _source: unknown,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    { input: { email, password } }: any,
    _context: IApolloServerContext
  ): Promise<User> => {
    return createUser(email, password);
  },
};

export default createUserMutation;
