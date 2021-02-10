import { Router } from 'express';
import { createQuestionRouter } from './createQuestion';
import { getUnansweredQuestionsListRouter } from './getUnansweredQuestionsList';
import { getFaqListRouter } from './getFaqList';
import { addQuestionAnswer } from './addAnswer';

const questionsRouter = Router();

questionsRouter.use('/', createQuestionRouter);
questionsRouter.use('/unanswered', getUnansweredQuestionsListRouter);
questionsRouter.use('/faq', getFaqListRouter);
questionsRouter.use('/answer', addQuestionAnswer);

export { questionsRouter };
