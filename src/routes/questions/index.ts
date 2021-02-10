import { Router } from 'express';
import { createQuestionRouter } from './createQuestion';
import { getUnansweredQuestionsListRouter } from './getUnansweredQuestionsList';
import { getFaqListRouter } from './getFaqList';

const questionsRouter = Router();

questionsRouter.use('/', createQuestionRouter);
questionsRouter.use('/unanswered', getUnansweredQuestionsListRouter);
questionsRouter.use('/faq', getFaqListRouter);

export { questionsRouter };
