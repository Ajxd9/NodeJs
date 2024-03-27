import mongoose from "mongoose";
import ImageSchema from "../helper/Image.js";
import { DEFAULT_REQUIRED_STRING_VALIDATION } from "../helper/defaultStringValidation.helper.js";

const GameSchema = new mongoose.Schema({
  title: { ...DEFAULT_REQUIRED_STRING_VALIDATION, unique: true },
  description: {
    ...DEFAULT_REQUIRED_STRING_VALIDATION,
    maxLength: 1024,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  genre: [
    {
      type: String,
      required: true,
    },
  ],
  platform: [
    {
      type: String,
      required: true,
    },
  ],
  publisher: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  systemRequirements: {
    minimum: {
      type: String,
      default: null,
    },
    recommended: {
      type: String,
      default: null,
    },
  },
  multiplayer: {
    type: Boolean,
    default: false,
  },
  onlinePlay: {
    type: Boolean,
    default: false,
  },
  offlinePlay: {
    type: Boolean,
    default: false,
  },
  singlePlayer: {
    type: Boolean,
    default: false,
  },
  ageRating: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  website: {
    type: String,
    default: null,
  },
  coverImage: ImageSchema,
  screenshots: [ImageSchema],
  likes: [String],

  serialNumber: {
    type: Number,
    minLength: 7,
    maxLength: 7,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Game = mongoose.model("Game", GameSchema);

export default Game;
