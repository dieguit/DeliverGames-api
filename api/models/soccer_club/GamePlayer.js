import Sequelize from 'sequelize';
import sequelize from '../../../config/database';
import GameConfig from './config';

const tableName = `${GameConfig.TablePrefix}_gameplayers`;

const GamePlayer = sequelize.define('GamePlayer', {
  clubName: {
    type: Sequelize.STRING,
  },
  clubLogo: {
    type: Sequelize.STRING,
  },
  coins: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      min: 0,
    },
  },
  altCoins: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      min: 0,
    },
  },
  hash: {
    type: Sequelize.STRING,
  },
}, { tableName });

export default GamePlayer;
