import Joi from "joi";


const sessionSchema = Joi.object({
  user_id: Joi.string().required(),
  session_token: Joi.string().required(),
  expiration_time: Joi.date().iso().required(),
  created_at: Joi.date().iso().required(),
  last_active: Joi.date().iso().required(),
  ip_address: Joi.string().ip(),
  user_agent: Joi.string(),
});
;

export default sessionSchema;
