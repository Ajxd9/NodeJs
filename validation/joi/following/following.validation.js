import Joi from "joi";


const followingSchema = Joi.object({
  follower_id: Joi.string().required(),
  followed_id: Joi.string().required(),
});
;

export default followingSchema;
