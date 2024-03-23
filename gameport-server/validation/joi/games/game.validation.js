import Joi from "joi";

const gameSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(10).max(5000).required(),
  releaseDate: Joi.date().iso().required(),
  genre: Joi.array().items(Joi.string().min(2).max(50)).required(),
  platform: Joi.array()
    .items(
      Joi.string().valid("PC", "PlayStation", "Xbox", "Nintendo", "Mobile")
    )
    .required(),
  publisher: Joi.string().min(2).max(256).required(),
  developer: Joi.string().min(2).max(256).required(),
  systemRequirements: Joi.object({
    minimum: Joi.string().min(2).max(5000),
    recommended: Joi.string().min(2).max(5000),
  }),
  multiplayer: Joi.boolean().required(),
  onlinePlay: Joi.boolean().when("multiplayer", {
    is: true,
    then: Joi.boolean().required(),
  }),
  offlinePlay: Joi.boolean().required(),
  singlePlayer: Joi.boolean().required(),
  ageRating: Joi.string().min(2).max(10).required(),
  price: Joi.number().min(0),
  website: Joi.string().uri(),
  coverImage: Joi.string().uri(),
  screenshots: Joi.array().items(Joi.string().uri()),
});

const gameValidation = (gameInput) => {
  return gameSchema.validateAsync(gameInput);
};

export default gameValidation;
