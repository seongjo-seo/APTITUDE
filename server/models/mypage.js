const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Mypage = sequelize.define(
    "mypage",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      contents: {
        type: DataTypes.STRING,
      },
      star: {
        type: DataTypes.BIGINT,
      },
      count: {
        type: DataTypes.BIGINT,
      },
    },
    {}
  );

  Mypage.associate = models => {
    // associations can be defined here
  };

  return Mypage;
};
