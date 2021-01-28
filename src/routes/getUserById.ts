import express from 'express';
import {getUser} from "../bd";

const router = express.Router();

router.get('/:id', (req, res) => {
    getUser(req.params.id)
        .then(data => {
            if (data.rows.length === 0) {
                res.status(404).json({
                    status: 'error',
                    info: "user doesn't exist"
                })
            } else {
                res.status(200).json({
                    status: 'success',
                    user: data.rows[0]
                })
            }
        })
        .catch(error => {
            res.status(404).json({
                status: 'error',
                error
            })
        })
})

module.exports = router;