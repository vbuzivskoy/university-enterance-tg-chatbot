import express from 'express';
import { Question } from '../../models';

const createQuestionRouter = express.Router();

createQuestionRouter.post('/', async (req, res) => {
  try {
    if (req.body.question === undefined) {
      throw new Error('question parameter is not found');
    }
    let createdQuestion = await Question.create(req.body);
    const questionId: number = createdQuestion.get().id;
    if (req.body.answer) {
      const queryResult = await Question.update({ has_answer: true }, {
        where: {
          id: questionId,
        },
        returning: true,
      });
      createdQuestion = queryResult[1][0];
    }

    res.status(200).json({
      status: 'success',
      question: createdQuestion,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { createQuestionRouter };
