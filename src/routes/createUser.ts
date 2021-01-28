import express from 'express';
import {createUser} from "../bd";

const router = express.Router();

router.post('/', (req, res) => {
    createUser(req.body)
        .then(data => {
            res.status(200).json({
                status: 'success',
                user: data.rows[0]
            })
        })
        .catch(error => {
            res.status(404).json({
                status: 'error',
                error
            })
        })
})

module.exports = router;