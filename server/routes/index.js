const express = require("express");

const homeRouter = express.Router();

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

homeRouter.get("/", (req, res) => {
  res.send("test");
});

// router.post('/', (req, res) => {
// })
// router.put('/', (req, res) => {
// })
// router.delete('/', (req, res) => {
// })
