import express from "express";
const app = express();
const port = 3000;

console.log("My name is Swapnil Vishwakarma");

app.listen(port, ()=>{
     console.log(`server is running on ${port}`);
});
