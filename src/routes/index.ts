import { Router } from 'express';
import { adminsRouter } from './admin';
import { settingsRouter } from './settings';
import { questionsRouter } from './questions';
import { usersRouter } from './users';

const APIV1Router = Router();

APIV1Router.use('/admins', adminsRouter);
APIV1Router.use('/settings', settingsRouter);
APIV1Router.use('/questions', questionsRouter);
APIV1Router.use('/users', usersRouter);

export { APIV1Router };
