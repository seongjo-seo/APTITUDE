const { v4: uuidv4 } = require("uuid");
const database = require("../models/index.js");
const bcrypt = require("bcryptjs");
const User = database.User;

// Create and Save a new User
// 유저를 생성합니다.
exports.create = async (req, res) => {
  const { userId, password, name, email, nickName, phoneNumber, address } =
    req.body;

  if (!req.body.userId) {
    res.status(400).send({
      message: "ID must be entered!",
    });
    return;
  }

  const hashedPasword = await bcrypt.hash(password, 8);
  // hook 태울 때 주소를 어케 태울 것인지 조절 + 다음 지도 api 조건에 맞춰서 조절
  const users = {
    id: uuidv4(),
    userId: userId,
    password: hashedPasword,
    name: name,
    email: email,
    nickName: nickName,
    phoneNumber: phoneNumber,
    address: address,
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

exports.join = (req, res) => {
  console.log(req.body);

  const {
    userId,
    userNick,
    userPhone,
    zonecode,
    address,
    detailAddress,
    deatilJusoData,
    extraAddress,
    userName,
    userEmail,
    userPw,
    userAge,
    userSex,
  } = req.body;
  /** 사용자 아이디가 존재하는지 확인*/
  const query = "SELECT userId FROM usertbl WHERE userId = ?;";
  db.query(query, [userId], async (err, results) => {
    if (err) {
      console.log(err);
    }

    /** 비밀번호 값 암호화*/
    const hashedPasword = await bcrypt.hash(userPw, 8);

    db.query(
      "INSERT INTO usertbl set ?",
      {
        userId: userId,
        userPhone: userPhone,
        zonecode: zonecode,
        address: address,
        userName: userName,
        userEmail: userEmail,
        userPw: hashedPasword,
        userAge: userAge,
        locationAgree: true,
        serviceAgree: true,
        userSex: userSex,
        pwAuth: hashedPasword,
      },
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.json({ status: "success" });
        }
      }
    );
  });
};

exports.auth = (req, res) => {
  const accessToken = req.headers["x-access-token"];
  const query = "SELECT * FROM usertbl WHERE userId = ?";

  if (!accessToken) {
    res.send({ auth: false, message: "need a token" });
  } else {
    verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U failed to authenticate" });
      } else {
        const userId = decoded.userId;
        db.query(query, [userId], (error, result) => {
          if (err) throw err;
          else {
            res.send({
              auth: true,
              userId: result[0].userId,
              userEmail: result[0].userEmail,
              userName: result[0].userName,
              userPhone: result[0].userPhone,
              /** 필요한 유저정보 여기다 추가 */
              /** 정보, 우편번호, 주소, 상세주소*/
              info: result[0].info,
              info: result[0].info,
            });
          }
        });
      }
    });
  }
};

exports.login = (req, res) => {
  postLoginModel(req)
    /** 여기에 값 넣어야함  */
    .then(({ accessToken, userId, userEmail, userName, userPhone }) => {
      res.send({
        auth: true,
        accessToken,
        userId,
        userEmail,
        userName,
        userPhone,
      });
    })
    .catch(passwordError =>
      res.send({ auth: false, message: passwordError.message })
    )
    .catch(notMatchedAccountError =>
      res.send({ auth: false, message: notMatchedAccountError.message })
    );
};

const createToken = ({ userId }) => {
  const accessToken = sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60,
  });
  return accessToken;
};

const postLoginModel = (req, callback) => {
  const { userId, userPw } = req.body;
  const query = "SELECT * FROM usertbl WHERE userId = ?";

  return new Promise((resolve, reject) => {
    db.query(query, [userId], (error, result) => {
      if (error) {
        throw error;
      }

      if (result.length > 0 && result[0].deleted != 1) {
        bcrypt.compare(userPw, result[0].userPw, (err, match) => {
          if (match) {
            const { userId, userEmail, userName, userPhone, info, deleted } =
              result[0];
            const accessToken = createToken({
              userId,
            });
            /** 성공시 accessToken,유저정보 전송 */
            resolve({
              accessToken,
              userId,
              userNick,
              userEmail,
              balance,
              address,
              zonecode,
              detailAddress,
              userName,
              userPhone,
              region1,
              region2,
              region3,
              info,
              deleted,
            });
          } else {
            reject(new Error("Wrong password"));
          }
        });
      } else {
        reject(new Error("Wrong account"));
      }
    });
  });
};
