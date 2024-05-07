import express from "express";
import path from 'path';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log();
  res.send("<1>Hello</h1>");
});



app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`You can access root at this => localhost:${port}`);
});
