import Sequelize from 'sequelize';
import sequelize from '../../../config/database';
import GameConfig from './config';
import FieldElement from './FieldElement';

const tableName = `${GameConfig.TablePrefix}_inventory_items`;

const InventoryItem = sequelize.define('InventoryItem', {
  skin: {
    type: Sequelize.STRING,
  },
  itemType: {
    type: Sequelize.STRING,
  },
}, { tableName });

InventoryItem.hasMany(FieldElement, { as: 'FieldElements' });

export default InventoryItem;
