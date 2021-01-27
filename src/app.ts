import express from 'express';
import {connectToDatabase} from "./bd";

const app = express();

app.use(express.json());

connectToDatabase()

export {
    app
}
