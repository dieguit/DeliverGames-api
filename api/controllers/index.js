const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const userQuery = require('./priv/User/UserQuery');
const {
  updateUser,
  deleteUser,
} = require('./priv/User/UserMutation');
const noteQuery = require('./priv/Note/NoteQuery');
const {
  createNote,
  updateNote,
  deleteNote,
} = require('./priv/Note/NoteMutation');

const RootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  description: 'This is the root query which holds all possible READ entrypoints for the GraphQL API',
  fields: () => ({
    user: userQuery,
    note: noteQuery,
  }),
});

const RootMutation = new GraphQLObjectType({
  name: 'rootMutation',
  description: 'This is the root mutation which holds all possible WRITE entrypoints for the GraphQL API',
  fields: () => ({
    updateUser,
    deleteUser,
    createNote,
    updateNote,
    deleteNote,
  }),
});

const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = Schema;
