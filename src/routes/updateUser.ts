import express from 'express';
import {User} from "../models";

const router = express.Router();

router.put('/', async (req, res) => {
    try {
        const telegramId = req.query.tg_id
        const updatedUser = await User.update(req.body, {
            where: {
                tg_id: telegramId
            },
            returning: true
        })
        if(!updatedUser[0]){
            throw new Error('User Does not exist')
        }
        res.status(200).json({
            status: 'success',
            user: updatedUser[1][0].get()
        })
    } catch (error) {
        res.status(404).json({
            message: error.message,
            error: error
        })
    }
})

module.exports = router;