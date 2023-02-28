import express from "express";
import bodyParser from "body-parser";
import userRouter from "../route/user.route";

const server = express();
server.use(bodyParser.json());

server.use("/", userRouter);

export default server;
