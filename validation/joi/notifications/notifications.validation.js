import Joi from "joi";


const notificationsSchema = Joi.object({
  user_id: Joi.string().required(),
  notification_type: Joi.string().required(),
  content: Joi.string().min(2).max(500).required(),
  timestamp: Joi.date().iso().required(),
  is_read: Joi.boolean().required(),
});
;

export default notificationsSchema;
