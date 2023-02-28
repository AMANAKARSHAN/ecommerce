import express from "express";
import { signInUser, signUpUser } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.post("/user/register", signUpUser);
userRouter.post("/user/login", signInUser);

export default userRouter;
