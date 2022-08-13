import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'id of the user',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'email of the user',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'password of the user',
    },
    role: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'role of the user',
    },
  },
});

export default UserType;
