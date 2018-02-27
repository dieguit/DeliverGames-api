import Sequelize from 'sequelize';
import sequelize from '../../../config/database';
import GameConfig from './config';

const tableName = `${GameConfig.TablePrefix}_field_elements`;

const FieldElement = sequelize.define('FieldElement', {
  posX: {
    type: Sequelize.FLOAT,
  },
  posY: {
    type: Sequelize.FLOAT,
  },
  posZ: {
    type: Sequelize.FLOAT,
  },
  rotX: {
    type: Sequelize.FLOAT,
  },
  rotY: {
    type: Sequelize.FLOAT,
  },
  rotZ: {
    type: Sequelize.FLOAT,
  },
}, { tableName });

export default FieldElement;
