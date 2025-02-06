require("dotenv").config();
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/twitter", (req, res) => {
  res.send("shaileshditcom");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
