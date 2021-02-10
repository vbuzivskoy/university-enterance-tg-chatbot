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
import { usersRouter } from './routes/users';
import { adminsRouter } from './routes/admin';
import { settingsRouter } from './routes/settings';
import { questionsRouter } from './routes/questions';

const app = express();

// cors setup
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/admins', adminsRouter);
app.use('/api/v1/settings', settingsRouter);
app.use('/api/v1/questions', questionsRouter);

// app.use('/api/v1/users/statistic', getUsersAmountRouter);

// connect to database
connectToDB();

export {
  app,
};
