import express from 'express';
import {User} from "../models";

const router = express.Router();

router.post('/', (req, res) => {
    User.create(req.body)
        .then(data => {
            res.status(200).json({
                status: 'success',
                user: data
            })
        })
        .catch(err => {
            return err
        })
})

module.exports = router;