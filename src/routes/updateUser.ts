import express from 'express';
import {User} from "../models";

const router = express.Router();

router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            return User.findAll({
                where: {
                    id: req.params.id
                }
            })
        })
        .then((data) => {
            res.status(200).json({
                status: 'success',
                data
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