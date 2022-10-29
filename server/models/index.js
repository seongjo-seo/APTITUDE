const config = require("../config/local_database.js");

const { Sequelize } = require("sequelize");

// 시퀄라이즈를 통해서 데이터베이스에 매개 변수를 전달합니다.
// Passing parameters to the database through sequencing
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.User = require("./users.js")(sequelize, Sequelize);
database.Sale = require("./sale.js")(sequelize, Sequelize);
database.Custom = require("./custom.js")(sequelize, Sequelize);
database.Review = require("./review.js")(sequelize, Sequelize);
database.Mypage = require("./mypage.js")(sequelize, Sequelize);

module.exports = database;
