import Joi from "joi";


const reviewsSchema = Joi.object({
  user_id: Joi.string().required(),
  game_id: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
  comment: Joi.string().min(2).max(500).required(),
  timestamp: Joi.date().iso().required(),
});
;

export default reviewsSchema;
