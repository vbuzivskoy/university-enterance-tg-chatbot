import express from 'express';
import { User } from '../../models';

const getAllUsersRouter = express.Router();

getAllUsersRouter.get('/', async (req, res) => {
  try {
    const queryParams = { ...req.query };
    const usersList = await User.findAll({ where: queryParams });
    if (usersList.length === 0) {
      throw new Error('Not found');
    }
    res.status(200).json({
      status: 'success',
      users: usersList,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
});

export { getAllUsersRouter };
