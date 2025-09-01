const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User added successfully");
  } catch (error) {
    res.status(400).send("Can't add User" + err.message);
  }
});

//Get one user by email
app.get("/oneUser", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.find({ emailId: userEmail });
    if (user.length === 0) {
      res.status(400).send("User Not found" + err.message);
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Something went wrong" + err.message);
  }
});

//Get User by id
app.get("/userByID", async (req, res) => {
  const userID = req.body._id;
  try {
    const userByID = await User.findById({ _id: userID });
    if (userByID.length === 0) {
      res.status(400).send("User Not Found");
    } else {
      res.send(userByID);
    }
  } catch (error) {
    res.status(400).send("Something went Wrong" + err.message);
  }
});

//Get all users
app.get("/allUsers", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (error) {
    res
      .status(400)
      .send("Something went wrong with getting all users" + err.message);
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
