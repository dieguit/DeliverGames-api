import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './Resolvers';
import User from './User/UserType';
import Note from './Note/NoteType';
import GamePlayer from './soccer_club/GamePlayerType';
import Field from './soccer_club/FieldType';
import InventoryItem from './soccer_club/InventoryItemType';
import FieldElement from './soccer_club/FieldElementType';

const rootQuery = `
  type Query {
    # Shared
    users: [User]
    user(
      id: Int!
    ): User
    
    notes: [Note]
    note(
      id: Int!
      UserId: Int!
    ): Note


    gamePlayers: [GamePlayer]
    gamePlayer(
      id: Int!
    ): GamePlayer
    
    fields: [Field]
    field(
      id: Int
    ): Field

    inventoryItems: [InventoryItem]
    inventoryItem(
      id: Int!
    ): InventoryItem
    
    fieldElements: [FieldElement]
    fieldElement(
      id: Int!
    ): FieldElement
  }
  
  type Mutation {
      createUser(username: String!, 
      email: String!, 
      password: String!
    ): User
  
    createNote(
      note: String!, 
      UserId: ID!
    ): Note


    createGamePlayer(
      hash: String!
      clubName: String!
      clubLogo: String!
      coins: Int
      altCoins: Int
    ): GamePlayer
    
    deleteGamePlayer(
      id: Int!
    ): Int
    
    createField(
      skin: String!
      name: String!
      GamePlayerId: Int!
    ): Field
    
    deleteField(
      id: Int!
    ): Int
    
    createInventoryItem(
      skin: String!
      itemType: String!
      GamePlayerId: Int!
    ): InventoryItem
    
    deleteInventoryItem(
      id: Int!
    ): Int
    
    createFieldElement(
      posX: Float!
      posY: Float!
      posZ: Float!
      rotX: Float!
      rotY: Float!
      rotZ: Float!
      FieldId: Int!
      InventoryItemId: Int!
    ): FieldElement
    
    deleteFieldElement(
      id: Int!
    ): Int
  }
`;

const Schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Note, GamePlayer, Field, InventoryItem, FieldElement],
  resolvers,
});

export default Schema;
