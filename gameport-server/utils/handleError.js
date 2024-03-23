import chalk from "chalk";
const handleError = (res, status, message) => {
  console.log(chalk.redBright(message));
  res.status(status).send(message);
};
export default handleError;
