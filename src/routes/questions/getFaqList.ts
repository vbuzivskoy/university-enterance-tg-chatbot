import express from 'express';
import { FAQ } from '../../models';

const getFaqListRouter = express.Router();

getFaqListRouter.get('/:id', async (req, res) => {
  try {
    const params: object = {
      limit: req.query.questions_amount || 5,
      order: [['stats', 'DESC']],
      where: {
        id: req.params.id,
      },
    };
    const questions: object = await FAQ.findAll(params);
    res.status(200).json({
      status: 'success',
      questions,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { getFaqListRouter };
