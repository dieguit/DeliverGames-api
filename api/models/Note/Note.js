import Sequelize from 'sequelize';
import sequelize from '../../../config/database';

import User from '../User/User';

const tableName = 'notes';

const Note = sequelize.define('Note', {
  note: {
    type: Sequelize.STRING,
  },
}, { tableName });

module.exports = Note;
