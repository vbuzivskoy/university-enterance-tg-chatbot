import express from 'express';
import bodyParser from 'body-parser'
import {connectToDatabase} from "./bd";

const indexRouter = require('./routes/index');
const createUserRouter = require('./routes/createUser')
const deleteUserRouter = require('./routes/delteteUser')
const getUserRouter = require('./routes/getUserById')
const getAllUsersRouter = require('./routes/getAllUsers')

const app = express();

app.use(express.json());
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/api/v1/user', createUserRouter)
app.use('/api/v1/user', getAllUsersRouter)
app.use('/api/v1/user', getUserRouter)
app.use('/api/v1/user', deleteUserRouter)

connectToDatabase()

export {
    app
}
