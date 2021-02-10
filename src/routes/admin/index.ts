import { Router } from 'express';
import {addAdminRouter} from "./addAdmin";

const adminsRouter = Router();

adminsRouter.use('/add', addAdminRouter)

export { adminsRouter }