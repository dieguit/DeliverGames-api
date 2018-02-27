const GamePlayer = `
  type GamePlayer {
    id: ID!
    hash: String!
    clubName: String!
    clubLogo: String!
    coins: Int
    altCoins: Int
    field: Field
    inventoryItems: [InventoryItem]
  }
`;

export default GamePlayer;
