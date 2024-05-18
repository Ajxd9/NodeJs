import fs from "fs";
import path from "path";
import schemas from "./schemas.js";
function createValidationFiles(schemas, directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  schemas.forEach((schema) => {
    const filePath = path.join(
      directory,
      `${schema.name}`,
      `${schema.name}.validation.js`
    );
    const fileContent = `import Joi from "joi";


const ${schema.name}Schema = ${schema.schema.toString()};

export default ${schema.name}Schema;
`;

    fs.writeFileSync(filePath, fileContent);
    console.log(`Created file: ${filePath}`);
  });
}

const directory = "./validation/joi/";

createValidationFiles(schemas, directory);
