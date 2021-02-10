import express from 'express';
import { User } from '../../models';

const updateUserDataRouter = express.Router();

updateUserDataRouter.put('/', async (req, res) => {
  try {
    const telegramId = req.query.tg_id;
    const updatedUser = await User.update(req.body, {
      where: {
        tg_id: telegramId,
      },
      returning: true,
    });
    if (!updatedUser[0]) {
      throw new Error('User Does not updated');
    }
    res.status(200).json({
      status: 'success',
      user: updatedUser[1][0].get(),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
});

export { updateUserDataRouter };
