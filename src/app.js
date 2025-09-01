const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "virat@kohli.com",
    age: 36,
    password: "virat@kumar",
  });
  try {
    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send("Can't add User" + err.message);
  }
});

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
