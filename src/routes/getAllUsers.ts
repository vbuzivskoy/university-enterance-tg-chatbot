import express from 'express';
import {User} from "../models";


const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const usersList = await User.findAll()
        res.status(200).json({
            status: 'success',
            users: usersList
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: error
        })
    }
})

module.exports = router;