import { Response } from "express";

export const sendResponseError = (
  res: Response,
  statusCode?: Number,
  msg?: String
) => {
  res.status(statusCode || 400).send(!!msg ? msg : "Invalid input !!");
};
