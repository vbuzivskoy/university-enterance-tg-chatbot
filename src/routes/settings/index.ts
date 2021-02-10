import { Router } from 'express';
import { changeSettingsRouter } from './changeSettings';

const settingsRouter = Router();

settingsRouter.use('/change', changeSettingsRouter);

export { settingsRouter };
