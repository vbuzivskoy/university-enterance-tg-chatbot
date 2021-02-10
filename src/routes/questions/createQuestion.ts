import express from 'express';
import { UnansweredQuestion } from '../../models';

const createQuestionRouter = express.Router();

createQuestionRouter.post('/', async (req, res) => {
  try {
    if (req.body.question === undefined) {
      throw new Error('"Question" parameter is not found');
    }
    const createdQuestion = await UnansweredQuestion.create(req.body);

    // const questionId: number = createdQuestion.get().id;
    // if (req.body.answer) {
    //     const queryResult = await UnansweredQuestion.update({ has_answer: true }, {
    //         where: {
    //             id: questionId,
    //         },
    //         returning: true,
    //     });
    //     createdQuestion = queryResult[1][0];
    // }

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
