const { v4: uuidv4 } = require("uuid");
const database = require("../models/sale");
const sale = database.sale;

// Create and Save a new url
exports.create = async (req, res) => {
  console.log(req.body);

  const { url, view, userId } = req.body;

  if (!req.body.userId) {
    res.status(400).send({
      message: "ID must be entered!",
    });
    return;
  }

  const saleData = {
    id: uuidv4(),
    url,
    view,
    userId,
  };

  try {
    const created = await sale.create(saleData);

    res.send(created);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the url.",
    });
  }
};
