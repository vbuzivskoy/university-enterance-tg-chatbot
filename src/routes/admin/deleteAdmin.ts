import express from 'express';
import { User } from '../../models';

const deleteAdminRouter = express.Router();

deleteAdminRouter.put('/', async (req, res) => {
  try {
    const telegramId = req.query.tg_id;
    const adminDeleted = await User.update({ type_id: 1 }, {
      where: {
        tg_id: telegramId,
      },
      returning: true,
    });
    if (!adminDeleted[0]) {
      throw new Error('User Does not exist');
    }
    res.status(200).json({
      status: 'success',
      user: adminDeleted[1][0].get(),
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { deleteAdminRouter };