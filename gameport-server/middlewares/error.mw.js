import chalk from "chalk";
const errorMiddleware = (err, req, res, next) => {
  errorHandler(res, 500, err.message);
};
const errorHandler = (res, status, message) => {
  console.log(chalk.redBright(message));
  res.status(status).send(message);
};
export default errorMiddleware;
