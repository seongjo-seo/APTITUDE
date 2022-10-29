const { v4: uuidv4 } = require("uuid");
const database = require("../models/review");
const review = database.review;

// Create and Save a new url
exports.create = async (req, res) => {
  console.log(req.body);

  const { url, title, contents, view, star, count } = req.body;

  if (!req.body.title) {
    res.status(400).send({
      message: "title must be entered!",
    });
    return;
  }

  const reviewData = {
    id: uuidv4(),
    url,
    title,
    contents,
    view,
    star,
    count,
  };

  try {
    const created = await review.create(reviewData);

    res.send(created);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the title.",
    });
  }
};
