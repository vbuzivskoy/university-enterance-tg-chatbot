import { Router } from 'express';
import {createUserRouter} from "./createUser";
import {deleteUserRouter} from "./deleteUser";
import {getAllUsersRouter} from "./getAllUsers";
import {getUserByTelegramIdRouter} from "./getUserById";

const usersRouter = Router();

usersRouter.use('/', getUserByTelegramIdRouter)
usersRouter.use('/', createUserRouter)
usersRouter.use('/', deleteUserRouter)
usersRouter.use('/', getAllUsersRouter)

export { usersRouter }