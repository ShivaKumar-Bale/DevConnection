const express = require("express");
const app = express();
const { authAdmin } = require("./middlewares/auth");

app.use("/admin", authAdmin);

app.get("/admin/getAllData", (req, res, next) => {
  res.send("All Data Sent");
});
app.get("/admin/deleteAllData", (req, res, next) => {
  res.send("All Data Deleted");
});

app.listen(3000, () => {
  console.log("Sever is sucessfully listening in port:3000");
});
