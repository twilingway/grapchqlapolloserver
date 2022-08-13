import { GraphQLList } from 'graphql';
import GqlUser from '@src/graphql/schema/typedefs/GqlUser';
import { TUser } from '@src/data/types/TUser';

const users: TUser[] = [
  {
    id: 1,
    email: 'test1@test.ru',
    password: '123456',
    role: 'USER',
  },
  {
    id: 1,
    email: 'admin@test.ru',
    password: '123456',
    role: 'ADMIN',
  },
];

const getAllUsersQuery = {
  type: new GraphQLList(GqlUser),
  resolve: (_source: unknown): TUser[] => {
    console.log('_source :>> ', _source);
    return users;
  },
};

export default getAllUsersQuery;
