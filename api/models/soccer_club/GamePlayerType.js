const GamePlayer = `
  type GamePlayer {
    id: ID!
    hash: String!
    clubName: String!
    clubLogo: String!
    coins: Int
    altCoins: Int
    field: Field
  }
`;

export default GamePlayer;
