const { v4: uuidv4 } = require("uuid");
const database = require("../config/local_database.js");
const User = database.User;

// Create and Save a new User
// 유저를 생성합니다.
exports.create = async (req, res) => {
  const { userId, password, name, email, nickName, phoneNumber, address } =
    req.body;

  if (!req.body.identity) {
    res.status(400).send({
      message: "ID must be entered!",
    });
    return;
  }

  // hook 태울 때 주소를 어케 태울 것인지 조절 + 다음 지도 api 조건에 맞춰서 조절
  const users = {
    id: uuidv4(),
    userId,
    password,
    name,
    email,
    nickName,
    phoneNumber,
    address,
  };

  try {
    const created = await User.create(users);

    res.send(created);
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message || "유저 생성 중 에러가 발생됐습니다.",
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};
