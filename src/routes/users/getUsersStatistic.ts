import express from 'express';
import { User } from '../../models';

const getUsersAmountRouter = express.Router();

getUsersAmountRouter.get('/', async (req, res) => {
  try {
    const queryParams = { ...req.query };
    const amount = await User.count({ where: queryParams });
    res.status(200).json({
      status: 'success',
      usersAmount: amount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
});

export { getUsersAmountRouter };
