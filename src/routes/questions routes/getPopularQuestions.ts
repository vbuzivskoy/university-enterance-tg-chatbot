import express from 'express';
import { Question } from '../../models';

const getPopularQuestionsListRouter = express.Router();

getPopularQuestionsListRouter.get('/:questions_amount?', async (req, res) => {
  try {
    const params: object = {
      limit: req.params.questions_amount || 10,
      order: [['stats', 'DESC']],
    };
    const questions = await Question.findAll(params);
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

export { getPopularQuestionsListRouter };
