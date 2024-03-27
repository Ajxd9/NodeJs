import mongoose from "mongoose";
import chalk from "chalk";
const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.MONGODB_CON_STR + "Gameport")
      .then(() => {
        console.log(chalk.magenta("Connected to MongoDB"));
        resolve();
      })
      .catch((err) => {
        console.log(chalk.red.bold("Error connecting to MongoDB: ", err));
        reject(err);
        process.exit(1);
      });
  });
};
export default connectToMongo;
