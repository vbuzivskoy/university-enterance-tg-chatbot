import { Router } from 'express';
import { addAdminRouter } from './addAdmin';
import { deleteAdminRouter } from './deleteAdmin';
import { adminsListRouter } from './getAdminList';

const adminsRouter = Router();

adminsRouter.use('/add', addAdminRouter);
adminsRouter.use('/delete', deleteAdminRouter);
adminsRouter.use('/list', adminsListRouter);

export { adminsRouter };
