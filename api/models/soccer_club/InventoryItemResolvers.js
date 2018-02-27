import GamePlayer from './GamePlayer';
import InventoryItem from './InventoryItem';

const InventoryItemResolvers = {
  Query: {
    inventoryItems: async () => InventoryItem.findAll(),
    inventoryItem: async (parent, args) => InventoryItem.findOne({
      where: args,
    }),
  },
  InventoryItem: {
    async gamePlayer(inventoryItem) {
      const gamePlayer = await GamePlayer.findOne({
        where: {
          id: inventoryItem.GamePlayerId,
        },
        raw: true,
      });
      return gamePlayer;
    },
    async fieldElements(inventoryItem) {
      const fieldElements = await inventoryItem.getFieldElements();
      return fieldElements;
    },
  },
  Mutation: {
    createInventoryItem: async (parent, args) => {
      const inventoryItem = await InventoryItem.create(args);
      return inventoryItem;
    },
    deleteInventoryItem: async (parent, args) => {
      const inventoryItem = await InventoryItem.findOne({
        where: { id: args.id },
      });
      await inventoryItem.destroy();
      return args.id;
    },
  },
};

export default InventoryItemResolvers;
