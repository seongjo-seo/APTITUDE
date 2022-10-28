const { accessTokenSecret, refreshTokenSecret } = require("../config/set.js");
const jwt = require("jsonwebtoken");

module.exports = app => {
  const users = require("../controllers/users.js");

  const user = require("express").Router();

  // Create a new User
  user.post("/", users.create);

  app.use("/api/users", user);
};
