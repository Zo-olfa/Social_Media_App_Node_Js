import chalk from "chalk";
import { bootstrap } from "./app.controller";

bootstrap()
  .then(() => console.log(chalk.yellow("Application Started Successfully")))
  .catch((error: unknown) => {
    console.log(chalk.redBright("Failed To Start Application"), chalk.gray(error));
    process.exit(1);
  });
