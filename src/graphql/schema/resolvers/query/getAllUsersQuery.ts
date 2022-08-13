import { GraphQLList } from 'graphql';
import { User } from '@prisma/client';
import GqlUser from '@src/graphql/schema/typedefs/GqlUser';
import getAllUsers from '@src/data/userService';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';

const getAllUsersQuery = {
  type: new GraphQLList(GqlUser),
  resolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<User[]> => {
    return getAllUsers();
  },
};

export default getAllUsersQuery;
