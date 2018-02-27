import FieldElement from './FieldElement';
import Field from './Field';
import InventoryItem from './InventoryItem';

const FieldElementResolvers = {
  Query: {
    fieldElements: async () => FieldElement.findAll(),
    fieldElement: async (parent, args) => FieldElement.findOne({
      where: args,
    }),
  },
  FieldElement: {
    async field(fieldElement) {
      const field = await Field.findOne({
        where: {
          id: fieldElement.FieldId,
        },
        raw: true,
      });
      return field;
    },
    async inventoryItem(fieldElement) {
      const inventoryItem = await InventoryItem.findOne({
        where: {
          id: fieldElement.InventoryItemId,
        },
        raw: true,
      });
      return inventoryItem;
    },
  },
  Mutation: {
    createFieldElement: async (parent, args) => {
      const fieldElement = await FieldElement.create(args);
      return fieldElement;
    },
    deleteFieldElement: async (parent, args) => {
      const fieldElement = await FieldElement.findOne({
        where: { id: args.id },
      });
      await fieldElement.destroy();
      return args.id;
    },
  },
};

export default FieldElementResolvers;
