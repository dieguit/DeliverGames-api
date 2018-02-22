import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './Resolvers';
import User from './User/UserType';
import Note from './Note/NoteType';

const rootQuery = `
  type Query {
    users: [User]
    user(
      id: Int!
    ): User
    
    notes: [Note]
    note(
      id: Int!
      userId: Int!
    ): Note
  }
  
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  
    createNote(text: String!, userId: ID!): Note
  }
`;

const Schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Note],
  Resolvers,
});

export default Schema;
