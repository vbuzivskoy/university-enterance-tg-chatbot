import express from 'express';
import { UnansweredQuestion } from '../../models';

const getUnansweredQuestionsListRouter = express.Router();

getUnansweredQuestionsListRouter.get('/', async (req, res) => {
  try {
    const questions: object = await UnansweredQuestion.findAll();
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

export { getUnansweredQuestionsListRouter };
