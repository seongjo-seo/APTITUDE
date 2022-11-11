const { accessTokenSecret, refreshTokenSecret } = require("../config/set.js");
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// sale, custom, review, users, mypage

module.exports = app => {
  const users = require("../controllers/users.js");
  const sales = require("../controllers/sale.js");
  const customer = require("../controllers/custom.js");
  const reviews = require("../controllers/review.js");
  const mypages = require("../controllers/mypage.js");

  const login = require("express").Router();
  const logout = require("express").Router();
  const user = require("express").Router();
  const sale = require("express").Router();
  const custom = require("express").Router();
  const review = require("express").Router();
  const mypage = require("express").Router();

  // Create a new User
  user.post("/", users.create);
  user.post("/join", users.join);
  // router.post('/login', authController.login);
  // router.get('/auth', authController.auth);
  // router.post('/join', authController.join);
  // router.post('/join/idCheck', authController.idCheck);
  // router.post('/join/nickCheck', authController.ncikCheck);
  // router.post('/join/emailCheck', authController.emailCheck);
  // --------------------------------
  // login & logout
  login.post("/signin", async (req, res) => {
    try {
      const user = await users.findByIdentityAndPassword(req, res);

      if (user) {
        // const accessToken = jwt.sign(
        //   { username: user.identity, role: user.role },
        //   accessTokenSecret
        // );

        // Return RefreshToken
        const refreshToken = jwt.sign(
          { id: user.id, name: user.name, email: user.email },
          refreshTokenSecret
        );

        res.json({ refreshToken });
      }
    } catch (err) {
      console.error(err);
      res.send("Identity or password incorrect");
    }
  });

  // ## Sign Out Router

  // Sign Out Request & Response
  logout.post("/signout", (req, res) => {
    const { token } = req.body;

    refreshTokens = refreshTokens.filter(
      refreshToken => refreshToken !== token
    );

    res.send("Logout successful");
  });

  login.post("/signup", users.create);
  // ----------------------------

  // Create a new sale
  sale.post("/", sales.create);

  // Create a new custom
  custom.post("/", customer.create);

  // Create a new review
  review.post("/", reviews.create);

  // Create a new mypage
  mypage.post("/", mypages.create);

  // token value
  app.post("/token", (req, res) => {
    const { token } = req.body;

    if (!token) {
      return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
      return res.sendStatus(403);
    }

    jwt.verify(token, refreshTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      const accessToken = jwt.sign(
        { username: user.username, role: user.role },
        accessTokenSecret,
        { expiresIn: "20m" }
      );

      res.json({
        accessToken,
      });
    });
  });

  app.use("/api/users", user);
  app.use("/api/sale", sale);
  app.use("/api/custom", custom);
  app.use("/api/review", review);
  app.use("/api/mypage", mypage);
};
