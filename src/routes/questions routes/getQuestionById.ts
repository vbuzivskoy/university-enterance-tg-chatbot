import express from 'express';
import { Question } from '../../models';

const getQuestionByIdRouter = express.Router();

getQuestionByIdRouter.get('/:id', async (req, res) => {
  try {
    const questionId: string = req.params.id;
    const question = await Question.findOne({
      where: {
        id: questionId,
      },
    });
    if (!question) {
      throw new Error(`question id: ${questionId} not found`);
    }
    const questionStats = question.get().stats;
    await Question.update({ stats: questionStats + 1 }, {
      where: {
        id: questionId,
      },
    });
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

export { getQuestionByIdRouter };
