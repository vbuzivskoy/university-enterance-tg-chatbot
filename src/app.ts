import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import {connectToDB} from "./bd";

const indexRouter = require('./routes/index');
const createUserRouter = require('./routes/createUser')
const deleteUserRouter = require('./routes/delteteUser')
const getUserRouter = require('./routes/getUserById')
const getAllUsersRouter = require('./routes/getAllUsers')
const changeUserRouter = require('./routes/updateUser')

const getQuestionRoute = require('./routes/questions/test')
const createQuestionRoute = require('./routes/questions/createQuestion')

const app = express();

//cors setup
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(bodyParser.json())
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/api/v1/user', createUserRouter)
app.use('/api/v1/user', getAllUsersRouter)
app.use('/api/v1/user', getUserRouter)
app.use('/api/v1/user', deleteUserRouter)
app.use('/api/v1/user', changeUserRouter)

app.use('/api/v1/question', getQuestionRoute)
app.use('/api/v1/question', createQuestionRoute)


connectToDB()

export {
    app
}
