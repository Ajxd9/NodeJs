import Joi from "joi";


const statsSchema = Joi.object({
  game_id: Joi.string().required(),
  player_count: Joi.number().min(0).required(),
  average_playtime: Joi.number().min(0),
  achievements_unlocked: Joi.number().min(0),
});
;

export default statsSchema;
