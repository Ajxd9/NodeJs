import Joi from "joi";


const commentsSchema = Joi.object({
  user_id: Joi.string().required(),
  post_id: Joi.string().required(),
  content: Joi.string().min(2).max(500).required(),
  timestamp: Joi.date().iso().required(),
});
;

export default commentsSchema;
