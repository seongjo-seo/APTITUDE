const express = require("express");

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.send("test");
});

// router.post('/', (req, res) => {
// })
// router.put('/', (req, res) => {
// })
// router.delete('/', (req, res) => {
// })
