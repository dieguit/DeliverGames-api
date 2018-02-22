import User from './User';

const UserResolvers = {
  Query: {
    users: () => User.findAll(),
    user: async (parent, args) => User.findOne({
      where: {
        id: args.id,
      },
    }),
  },
  Mutation: {
    createUser: async (parent, args) => User.create(args),
  },
};

export default UserResolvers;
