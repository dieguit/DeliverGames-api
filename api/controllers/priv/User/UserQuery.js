const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const UserType = require('../../../models/shared/User/UserType');
const User = require('../../../models/shared/User/User');

const userQuery = {
  type: new GraphQLList(UserType),
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
    username: {
      name: 'username',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
    notes: {
      name: 'notes',
      type: GraphQLString,
    },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (user, args) => User.findAll({ where: args }),
};

module.exports = userQuery;
