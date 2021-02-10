import { Router } from 'express';
import { createUserRouter } from './createUser';
import { deleteUserRouter } from './deleteUser';
import { getAllUsersRouter } from './getAllUsers';
import { getUserByTelegramIdRouter } from './getUserById';
import { updateUserDataRouter } from './updateUser';
import { getUsersAmountRouter } from './getUsersStatistic';

const usersRouter = Router();

usersRouter.use('/', getUserByTelegramIdRouter);
usersRouter.use('/', createUserRouter);
usersRouter.use('/', deleteUserRouter);
usersRouter.use('/', getAllUsersRouter);
usersRouter.use('/', updateUserDataRouter);
usersRouter.use('/statistics', getUsersAmountRouter);

export { usersRouter };
