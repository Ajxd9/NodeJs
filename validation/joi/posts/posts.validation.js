import Joi from "joi";


const postsSchema = Joi.object({
  user_id: Joi.string().required(),
  content: Joi.string().min(2).max(5000).required(),
  timestamp: Joi.date().iso().required(),
});
;

export default postsSchema;
