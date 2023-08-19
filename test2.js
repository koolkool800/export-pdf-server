const express = require("express");
const app = express();
// const puppeteer = require("puppeteer");
var cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});