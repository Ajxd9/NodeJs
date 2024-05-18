import Joi from "joi";


const followersSchema = Joi.object({
  follower_id: Joi.string().required(),
  followed_id: Joi.string().required(),
});
;

export default followersSchema;
