import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

const db =
  "mongodb+srv://ecommerce:ecommerce@cluster0.yvfrmtd.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    //useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((e) => console.log(e));

const server = app.listen(8000, () => {
  const port = server.address().port;
  const host = server.address().address;
  console.log(`Listening at ${host} ${port}`);
});
