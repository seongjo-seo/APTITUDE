const { accessTokenSecret, refreshTokenSecret } = require("../config/set.js");
const jwt = require("jsonwebtoken");

// sale, custom, review, users, mypage

module.exports = app => {
  const users = require("../controllers/users.js");
  const sales = require("../controllers/sale.js");
  const custom = require("../controllers/custom.js");

  const user = require("express").Router();
  const sale = require("express").Router();
  const customer = require("express").Router();

  // Create a new User
  user.post("/", users.create);

  // Create a new sale
  sale.post("/", sales.create);

  // Create a new custom
  customer.post("/", custom.create);

  app.use("/api/users", user);
  app.use("/api/sales", sale);
  app.use("/api/custom", customer);
};
