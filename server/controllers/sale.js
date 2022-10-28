const { v4: uuidv4 } = require("uuid");
const database = require("../models/sale");
const sale = database.sale;

// Create and Save a new Post
exports.create = async (req, res) => {
  console.log(req.body);

  const { post, view, userId } = req.body;

  if (!req.body.userId) {
    res.status(400).send({
      message: "User ID can not be empty!",
    });
    return;
  }

  const saleData = {
    id: uuidv4(),
    post,
    view,
    userId,
  };

  try {
    const created = await sale.create(saleData);

    res.send(created);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Post.",
    });
  }
};
