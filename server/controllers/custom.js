const { v4: uuidv4 } = require("uuid");
const database = require("../config/local_database.js");
const custom = database.custom;

// Create and Save a new Post
exports.create = async (req, res) => {
  console.log(req.body);

  const { post, view, userId } = req.body;

  if (!req.body.userId) {
    res.status(400).send({
      message: "ID must be entered!",
    });
    return;
  }

  const customData = {
    id: uuidv4(),
    post,
    view,
    userId,
  };

  try {
    const created = await custom.create(customData);

    res.send(created);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Post.",
    });
  }
};
