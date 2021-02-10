import express from 'express';
import { BotSetting } from '../../models';

const changeSettingsRouter = express.Router();

changeSettingsRouter.put('/', async (req, res) => {
  try {
    if (!req.body.name || !req.body.value) {
      throw new Error("dispatched JSON must have 'name' and 'value' field");
    }
    const updatedFAQ = await BotSetting.update({ value: req.body.value }, {
      where: {
        name: req.body.name,
      },
      returning: true,
    });
    if (!updatedFAQ[0]) {
      throw new Error(`the value has not been updated, check value name: ${req.body.name}`);
    }
    console.log(updatedFAQ);
    res.status(200).json({
      status: 'success',
      faq: updatedFAQ[1][0],
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error,
    });
  }
});

export { changeSettingsRouter };
