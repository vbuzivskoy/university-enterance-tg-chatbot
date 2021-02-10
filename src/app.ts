import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectToDB } from './bd';

// router imports
// import { getAllUsersRouter } from './routes/getAllUsers';
// import { createUserRouter } from './routes/createUser';
// import { deleteUserRouter } from './routes/delteteUser';
// import { getUserByTelegramIdRouter } from './routes/getUserById';
// import { updateUserDataRouter } from './routes/updateUser';
// import { addAdminRouter } from './routes/admin routes/addAdmin';
// import { deleteAdminRouter } from './routes/admin routes/deleteAdmin';
// import { createQuestionRouter } from './routes/questions routes/createQuestion';
// import { getQuestionsListRouter } from './routes/questions routes/getQuestionsList';
// import { adminsListRouter } from './routes/admin routes/getAminsList';
// import { getQuestionByIdRouter } from './routes/questions routes/getQuestionById';
// import { getPopularQuestionsListRouter } from './routes/questions routes/getPopularQuestions';
// import { changeFAQRouter } from './routes/FAQ change routes/changeFAQ';
// import { getUsersAmountRouter } from './routes/getUserStatistc';
import {usersRouter} from "./routes/users";
import {adminsRouter} from "./routes/admin";

const app = express();

// cors setup
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/admins', adminsRouter)
// app.use('/api/v1/users/statistic', getUsersAmountRouter);
// app.use('/api/v1/users', createUserRouter);
// app.use('/api/v1/users', getAllUsersRouter);
// app.use('/api/v1/users', deleteUserRouter);
// app.use('/api/v1/users', getUserByTelegramIdRouter);
// app.use('/api/v1/users', updateUserDataRouter);
//
// app.use('/api/v1/admins/add', addAdminRouter);
// app.use('/api/v1/admins/delete', deleteAdminRouter);
// app.use('/api/v1/admins/list', adminsListRouter);
//
// app.use('/api/v1/questions/popular', getPopularQuestionsListRouter);
// app.use('/api/v1/questions', createQuestionRouter);
// app.use('/api/v1/questions', getQuestionsListRouter);
// app.use('/api/v1/questions', getQuestionByIdRouter);
//
// app.use('/api/v1/settings/faq', changeFAQRouter);

// connect to database
connectToDB();

export {
  app,
};
