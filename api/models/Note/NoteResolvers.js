import Note from './Note';
import User from '../User/User';

const NoteResolvers = {
  Query: {
    notes: () => Note.findAll(),
    note: async (parent, args) => Note.findOne({
      where: {
        id: args.id,
      },
    }),
  },
  Note: {
    async user(note) {
      const user = await User.findOne({
        where: {
          id: note.UserId,
        },
        raw: true,
      });
      return user;
    },
  },
  Mutation: {
    createNote: async (parent, args) => Note.create(args),
  },
};

export default NoteResolvers;
