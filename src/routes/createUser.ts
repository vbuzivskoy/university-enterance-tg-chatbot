import express from 'express';
const router = express.Router();
import {createUser} from "../bd";

router.post('/', (req, res) => {
    createUser(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send('err')
            return err
        })
})

module.exports = router;