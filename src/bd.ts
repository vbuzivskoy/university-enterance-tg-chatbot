import { Sequelize } from 'sequelize';
import { conString } from './const';

const db = new Sequelize(
  conString,
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

async function connectToDB() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export {
  connectToDB, db,
};
