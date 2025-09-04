const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("please enter Name");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("enter  EmailID please");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter stronger password");
  }
};
module.exports = { validateSignUpData };
