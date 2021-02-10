import { Router } from 'express';
import { changeSettingsRouter } from './changeSettings';

const settingsRouter = Router();

settingsRouter.use('/add', changeSettingsRouter);

export { settingsRouter };
