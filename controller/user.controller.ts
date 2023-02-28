import bcrypt from "bcrypt";
import { sendResponseError } from "../middleware/error";
import { User } from "../models/user.model";
import { checkPassword } from "../utils/utility.function";

export const signUpUser = async (req, res) => {
  const { emailId, password, ...userDetail } = req.body;
  try {
    const user = await User.findOne({ emailId });
    if (!!user) {
      sendResponseError(res, 409, "User already exist");
    }
    const hash = await bcrypt.hash(password, 8);
    await User.create({ ...userDetail, hashedPassword: hash });
    res.status(201).send("Account opened successfully");
  } catch (e) {
    console.log(`Error : ${e}`);
    sendResponseError(res, 409, e);
  }
};

export const signInUser = async (req, res) => {
  const { emailId, password } = req.body;
  try {
    const user = await User.findOne({ emailId });

    if (!!!user) {
      sendResponseError(res, 404, "User not found");
    }

    const same = await checkPassword(password, user?.hashedPassword);
    console.log(same);
    res.status(201).send("Logged in successfully");
  } catch (e) {
    console.log(`Error : ${e}`);
    sendResponseError(res, 404, e);
  }
};
