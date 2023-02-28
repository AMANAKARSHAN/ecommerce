import mongoose from "mongoose";

const userDetail = new mongoose.Schema({
  name: { type: String, require: true },
  emailId: {
    type: String,
    require: true,
    validate: (v) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(v);
    },
  },
  hashedPassword: { type: String, require: true },
  phoneNo: { type: String, require: true, validate: (v) => v.length == 10 },
  address: { type: String },
  pincode: {
    type: Number,
    require: true,
    validate: (v) => v >= 100000 && v <= 999999,
  },
  isAdmin: { type: Boolean, default: false, require: true },
});

export const User = mongoose.model("User", userDetail);
