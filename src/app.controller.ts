const APP_PORT = 8080;
const APP_URL = `http://localhost:${APP_PORT}`;
import express, { Express, Response } from "express";
import helmet from "helmet";
import path from "path";
import cors from "cors";
import chalk from "chalk";

export const bootstrap = async (): Promise<void> => {
  const app: Express = express();

  app.use(express.json(), cors(), helmet());

  app.get("/", (_, res: Response) =>
    res.status(200).json({ status: 200, message: "Welcome From Social App API" }),
  );

  app.use("/uploads", express.static(path.resolve("./uploads")));

  app.all("/*dummy", (_, res: Response) =>
    res.status(404).json({ status: 404, message: "Handler Not Found!!" }),
  );

  app.listen(APP_PORT, () =>
    console.log(chalk.cyan("Sara7a App Server Is Running On"), chalk.black(APP_URL)),
  );
};
