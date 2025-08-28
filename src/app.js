const express = require("express");
const app = express();
const connectDB = require("./config/database");

connectDB()
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(3000, () => {
      console.log("Sever is sucessfully listening in port:3000");
    });
  })
  .catch((err) => {
    console.log("Database not connected");
  });
