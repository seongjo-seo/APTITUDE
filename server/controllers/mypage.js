const { v4: uuidv4 } = require("uuid");
const database = require("../config/local_database.js");
const mypage = database.mypage;

// Create and Save a new url
exports.create = async (req, res) => {
  console.log(req.body);

  const { url } = req.body;

  if (!req.body.title) {
    res.status(400).send({
      message: "title must be entered!",
    });
    return;
  }

  const mypageData = {
    id: uuidv4(),
    url,
  };

  try {
    const created = await mypage.create(mypageData);

    res.send(created);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the title.",
    });
  }
};
