import GamePlayer from './GamePlayer';
import Field from './Field';

const GamePlayerResolvers = {
  Query: {
    gamePlayers: async () => GamePlayer.findAll(),
    gamePlayer: async (parent, args) => GamePlayer.findOne({
      where: args,
    }),
  },
  GamePlayer: {
    async field(gamePlayer) {
      const field = await Field.findOne({
        where: {
          GamePlayerId: gamePlayer.id,
        },
        raw: true,
      });
      return field;
    },
  },
  Mutation: {
    createGamePlayer: async (parent, args) => {
      const gamePlayer = await GamePlayer.create(args);
      return gamePlayer;
    },
    deleteGamePlayer: async (parent, args) => {
      const gamePlayer = await GamePlayer.findOne({
        where: { id: args.id },
      });
      await gamePlayer.destroy();
      return args.id;
    },
  },
};

export default GamePlayerResolvers;
