import express from "express";
const app = express();
const port = 3000;

var x  = 2;

console.log(x);


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
