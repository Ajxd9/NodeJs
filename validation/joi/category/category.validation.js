import Joi from "joi";


const categorySchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  description: Joi.string().min(2).max(500).required(),
});
;

export default categorySchema;
