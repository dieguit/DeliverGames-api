import Sequelize from 'sequelize';
import sequelize from '../../../config/database';
import GameConfig from './config';

import GamePlayer from './GamePlayer';

const tableName = `${GameConfig.TablePrefix}_fields`;

const Field = sequelize.define('Field', {
  skin: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
}, { tableName });

Field.belongsTo(GamePlayer);

export default Field;
