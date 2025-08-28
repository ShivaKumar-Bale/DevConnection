const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sbale160NodeJS:3ATiK5bpGxtCcPwY@nodejslearning.xd09z.mongodb.net/devConnection"
  );
};

module.exports = connectDB;
