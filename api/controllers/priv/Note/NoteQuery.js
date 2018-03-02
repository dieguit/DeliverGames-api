const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const NoteType = require('../../../models/shared/Note/NoteType');
const Note = require('../../../models/shared/Note/Note');

const noteQuery = {
  type: new GraphQLList(NoteType),
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
    UserId: {
      name: 'UserId',
      type: GraphQLInt,
    },
    note: {
      name: 'note',
      type: GraphQLString,
    },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (user, args) => Note.findAll({ where: args }),
};

module.exports = noteQuery;
