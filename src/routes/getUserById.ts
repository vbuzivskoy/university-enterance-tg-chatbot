import express from 'express';
import { User } from '../models';

const getUserByTelegramIdRouter = express.Router();

getUserByTelegramIdRouter.get('/:telegramId', async (req, res) => {
  try {
    const { telegramId } = req.params;
    const user = await User.findOne({
      where: {
        tg_id: telegramId,
      },
    });
    if (!user) {
      throw new Error(`User ${telegramId} not found`);
    }
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

export { getUserByTelegramIdRouter };
