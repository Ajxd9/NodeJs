import Joi from "joi";


const achievementsSchema = Joi.object({
  user_id: Joi.string().required(),
  game_id: Joi.string().required(),
  achievement_name: Joi.string().min(2).max(50).required(),
  timestamp: Joi.date().iso().required(),
});
;

export default achievementsSchema;
