import User from './User';

const UserResolvers = {
  Query: {
    users: () => User.findAll(),
    user(parent, args) {
      return {
        id: 1,
        username: 'pepe',
      };
    },
/*    user: async (parent, args) => User.findOne({
      where: {
        id: args.id,
      },
    }),*/
  },
  User: {
    notes(user) {
      return [{id: 123, text: 'asd'}];
    },
  },
  Mutation: {
    createUser: async (parent, args) => User.create(args),
  },
};

export default UserResolvers;
