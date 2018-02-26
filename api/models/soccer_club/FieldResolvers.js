import GamePlayer from './GamePlayer';
import Field from './Field';

const FieldResolvers = {
  Query: {
    fields: async () => Field.findAll(),
    field: async (parent, args) => Field.findOne({
      where: args,
    }),
  },
  Field: {
    async gamePlayer(field) {
      const gamePlayer = await GamePlayer.findOne({
        where: {
          id: field.GamePlayerId,
        },
        raw: true,
      });
      return gamePlayer;
    },
  },
  Mutation: {
    createField: async (parent, args) => {
      const field = await Field.create(args);
      return field;
    },
    deleteField: async (parent, args) => {
      const field = await Field.findOne({
        where: { id: args.id },
      });
      await field.destroy();
      return args.id;
    },
  },
};

export default FieldResolvers;
