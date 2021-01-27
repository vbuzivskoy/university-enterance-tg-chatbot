import express from 'express';
import bodyParser from 'body-parser'
import {connectToDatabase} from "./bd";

const indexRouter = require('./routes/index');
const createUserRouter = require('./routes/createUser')

const app = express();

app.use(express.json());
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/api/v1/user', createUserRouter)

// connectToDatabase()

export {
    app
}
