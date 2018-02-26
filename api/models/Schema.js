import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './Resolvers';
import User from './User/UserType';
import Note from './Note/NoteType';
import GamePlayer from './soccer_club/GamePlayerType';
import Field from './soccer_club/FieldType';

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
  }
`;

const Schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Note, GamePlayer, Field],
  resolvers,
});

export default Schema;
