import registerSchemaValidation from "./joi/users/register.js";
import loginSchemaValidation from "./joi/users/login.js";
import editUserSchemaValidation from "./joi/users/editUser.js";
import validateObjectIdSchema from "./joi/objectId.js";
import createGameSchemaValidation from "./joi/games/game.validation.js";
import patchValidation from "./joi/users/patch.validation.js";

const VALIDATION = "joi";

const registerValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return registerSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const loginValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return loginSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const editUserValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return editUserSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const objectIdValidation = (id) => {
  if (VALIDATION === "joi") {
    return validateObjectIdSchema(id);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};

const createGameValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return createGameSchemaValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};
const patchSchemaValidation = (userInput) => {
  if (VALIDATION === "joi") {
    return patchValidation(userInput);
  } else {
    throw new Error(`Validation ${VALIDATION} is not supported`);
  }
};
export {
  registerValidation,
  loginValidation,
  editUserValidation,
  objectIdValidation,
  createGameValidation,
  patchSchemaValidation,
};
