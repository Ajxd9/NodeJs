import Joi from "joi";


const discountsSchema = Joi.object({
  game_id: Joi.string().required(),
  discount_percentage: Joi.number().min(0).max(100).required(),
  start_date: Joi.date().iso().required(),
  end_date: Joi.date().iso().required(),
  platform: Joi.string(),
});
;

export default discountsSchema;
