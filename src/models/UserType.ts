import { DataTypes } from 'sequelize';

import { db } from '../bd';

export default db.define('user_types', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  type_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
},
{
  timestamps: false,
});
