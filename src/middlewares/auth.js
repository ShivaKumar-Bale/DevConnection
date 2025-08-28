const authAdmin = (req, res, next) => {
  console.log("Auth admin is being checked!!");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized requests");
  } else {
    next();
  }
};
const authUser = (req, res, next) => {
  console.log("Auth admin is being checked!!");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized requests");
  } else {
    next();
  }
};

module.exports = { authAdmin, authUser };
