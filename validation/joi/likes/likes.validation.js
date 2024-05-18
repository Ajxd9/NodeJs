import Joi from "joi";


const likesSchema = Joi.object({
  user_id: Joi.string().required(),
  post_id: Joi.string().required(),
  timestamp: Joi.date().iso().required(),
});
;

export default likesSchema;
