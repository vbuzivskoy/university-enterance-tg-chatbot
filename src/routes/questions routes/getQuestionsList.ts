import express from 'express';
import { Question, User } from '../../models';

const getQuestionsListRouter = express.Router();

getQuestionsListRouter.get('/', async (req, res) => {
  try {
    let params: object = {};
    if (req.query.has_answer) {
      params = {
        where: {
          has_answer: req.query.has_answer,
        },
      };
    }
    const questions: object = await Question.findAll(params);
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

export { getQuestionsListRouter };
