import express from 'express';
import {User} from "../models";


const router = express.Router();

router.get('/', (req, res) => {
    User.findAll({})
        .then(users => {
            console.log("All users:", JSON.stringify(users, null, 2));
            res.status(200).json({
                status: 'success',
                users
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