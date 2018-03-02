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
  User: {
    notes(user) {
      return user.getNotes();
    },
  },
  Mutation: {
    createUser: async (parent, args) => User.create(args),
    deleteUser: async (parent, args) => {
      const user = await User.findOne({
        where: { id: args.id },
      });
      await user.destroy();
      return args.id;
    },
  },
};

export default UserResolvers;
