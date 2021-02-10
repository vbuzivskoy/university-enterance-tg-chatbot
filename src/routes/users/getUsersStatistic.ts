import express from 'express';
import { User } from '../../models';

const getUsersAmountRouter = express.Router();

getUsersAmountRouter.get('/', async (req, res) => {
  try {
    let param = {};
    if (req.query.role_id) {
      param = {
        where: {
          role_id: req.query.role_id,
        },
      };
    }
    const amount = await User.count(param);
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
