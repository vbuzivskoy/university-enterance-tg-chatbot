import express from 'express';
import { User } from '../models';

const getAllUsersRouter = express.Router();

getAllUsersRouter.get('/', async (req, res) => {
  try {
    const usersList = await User.findAll();
    res.status(200).json({
      status: 'success',
      users: usersList,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { getAllUsersRouter };
