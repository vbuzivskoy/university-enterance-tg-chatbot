import express from 'express';
import { Question } from '../../models';

const createQuestionRouter = express.Router();

createQuestionRouter.post('/', async (req, res) => {
  try {
    if (req.body.question === undefined) {
      throw new Error('question parameter is not found');
    }
    const question = await Question.create(req.body);
    res.status(200).json({
      status: 'success',
      question,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { createQuestionRouter };
