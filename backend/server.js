import express from "express";
import dotenv from "dotenv";

dotenv.config();
//express app
const app = express();

const PORT = process.env.PORT;
//routes to test Api
app.get("/", (req, res) => {
  res.json({ mssg: "Hey dud Welcome to the app" });
});
0;
//listen for request
app.listen(PORT, () => console.log(" Listening on port"));
