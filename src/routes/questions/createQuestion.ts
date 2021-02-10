import express from 'express';
import { UnansweredQuestion } from '../../models';

const createQuestionRouter = express.Router();

createQuestionRouter.post('/', async (req, res) => {
  try {
    if (req.body.question === undefined) {
      throw new Error('"Question" parameter is not found');
    }
    const createdQuestion = await UnansweredQuestion.create(req.body);
    res.status(200).json({
      status: 'success',
      question: createdQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
});

export { createQuestionRouter };
