import Joi from "joi";


const trendingSchema = Joi.object({
  post_id: Joi.string().required(),
  engagement_count: Joi.number().min(0).required(),
  timestamp: Joi.date().iso().required(),
});
;

export default trendingSchema;
