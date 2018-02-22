import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './Resolvers';
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
      UserId: Int!
    ): Note
  }
  
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  
    createNote(note: String!, UserId: ID!): Note
  }
`;

const Schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Note],
  resolvers,
});

export default Schema;
