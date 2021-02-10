import { Router } from 'express';
import { addAdminRouter } from './addAdmin';
import { deleteAdminRouter } from './deleteAdmin';
import { adminsListRouter } from './getAdminList';

const adminsRouter = Router();

adminsRouter.use('/add', addAdminRouter);
deleteAdminRouter.use('/delete', addAdminRouter);
adminsListRouter.use('/get', addAdminRouter);

export { adminsRouter };
