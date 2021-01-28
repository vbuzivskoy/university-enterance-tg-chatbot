import express from 'express';
import {getAllUsers} from "../bd";

const router = express.Router();

router.get('/', (req, res) => {
    getAllUsers()
        .then(data => {
            res.status(200).json({
                status: 'success',
                users: data.rows
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