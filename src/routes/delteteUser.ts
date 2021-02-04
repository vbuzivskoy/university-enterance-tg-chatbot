import express from 'express';
import {deleteUser} from "../bd";
import {User} from "../models";

const router = express.Router();

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(data => {
            res.status(200).json({
                status: 'success',
                info: `user ${req.params.id} has been deleted`
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