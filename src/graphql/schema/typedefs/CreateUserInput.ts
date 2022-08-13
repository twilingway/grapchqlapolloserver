import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInputObjectType } from 'graphql';

const CreateUserInput = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  description: 'Create user input',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'email of the user',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'password of the user',
    },
  },
});

export default CreateUserInput;
