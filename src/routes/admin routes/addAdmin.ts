import express from 'express';
import { User } from '../../models';

const addAdminRouter = express.Router();

addAdminRouter.put('/', async (req, res) => {
  try {
    const telegramId = req.query.tg_id;
    const adminAdded = await User.update({ type_id: 2 }, {
      where: {
        tg_id: telegramId,
      },
      returning: true,
    });
    if (!adminAdded[0]) {
      throw new Error('User Does not exist');
    }
    res.status(200).json({
      status: 'success',
      user: adminAdded[1][0].get(),
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { addAdminRouter };