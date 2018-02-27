const InventoryItem = `
  type InventoryItem {
    id: ID!
    skin: String!
    itemType: String!
    gamePlayer: GamePlayer
    fieldElements: [FieldElement]
  }
`;

export default InventoryItem;
