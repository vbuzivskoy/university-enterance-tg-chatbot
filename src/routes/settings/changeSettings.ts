import express from 'express';
import { BotSetting } from '../../models';

const changeSettingsRouter = express.Router();

changeSettingsRouter.put('/', async (req, res) => {
  try {
    if (!req.body.name || !req.body.value) {
      throw new Error("Dispatched JSON must have 'name' and 'value' field");
    }
    const updatedFAQ = await BotSetting.update({ value: req.body.value }, {
      where: {
        name: req.body.name,
      },
      returning: true,
    });
    if (!updatedFAQ[0]) {
      throw new Error(`The value has not been updated, check value 'name': ${req.body.name}`);
    }
    res.status(200).json({
      status: 'success',
      faq: updatedFAQ[1][0],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
});

export { changeSettingsRouter };
