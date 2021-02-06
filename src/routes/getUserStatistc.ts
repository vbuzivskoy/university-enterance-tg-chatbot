import express from 'express';
import { User } from '../models';

const getUsersAmountRouter = express.Router();

getUsersAmountRouter.get('/', async (req, res) => {
  try {
    if (!req.query.role_id) {
      throw new Error("Add 'role_id' parameter to request url");
    }
    const amount = await User.count({
      where: {
        role_id: req.query.role_id,
      },
    });
    res.status(200).json({
      status: 'success',
      usersAmount: amount,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { getUsersAmountRouter };
