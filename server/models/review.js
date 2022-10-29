const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      url: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      contents: {
        type: DataTypes.STRING,
      },
      view: {
        type: DataTypes.BIGINT,
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

  Review.associate = models => {
    // associations can be defined here
  };

  return Review;
};
