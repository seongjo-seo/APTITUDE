const { accessTokenSecret, refreshTokenSecret } = require("../config/set.js");
const jwt = require("jsonwebtoken");

// sale, custom, review, users, mypage

module.exports = app => {
  const users = require("../controllers/users.js");
  const sales = require("../controllers/sale.js");
  const customer = require("../controllers/custom.js");
  const reviews = require("../controllers/review.js");
  const mypages = require("../controllers/mypage.js");

  const user = require("express").Router();
  const sale = require("express").Router();
  const custom = require("express").Router();
  const review = require("express").Router();
  const mypage = require("express").Router();

  // Create a new User
  user.post("/", users.create);

  // Create a new sale
  sale.post("/", sales.create);

  // Create a new custom
  custom.post("/", customer.create);

  // Create a new custom
  review.post("/", reviews.create);

  // Create a new custom
  mypage.post("/", mypages.create);

  app.use("/api/users", user);
  app.use("/api/sale", sale);
  app.use("/api/custom", custom);
  app.use("/api/review", review);
  app.use("/api/mypage", mypage);
};
