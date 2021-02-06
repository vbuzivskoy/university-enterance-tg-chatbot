import express from 'express';
import { User } from '../models';

const createUserRouter = express.Router();

createUserRouter.post('/', async (req, res) => {
  try {
    if (req.body.tg_id === undefined) {
      throw new Error('Telegram id (tg_id) parameter is not found');
    }
    const user = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { createUserRouter };
