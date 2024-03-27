import mongoose from "mongoose";
import { DEFAULT_STRING_VALIDATION } from "./defaultStringValidation.helper.js";
import URL from "./urlStringValidation.js";

const ImageSchema = new mongoose.Schema({
  url: URL,
  alt: DEFAULT_STRING_VALIDATION,
});

export default ImageSchema;
