const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "sale",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      post: {
        type: DataTypes.STRING,
      },
      view: {
        type: DataTypes.BIGINT,
      },
    },
    {}
  );

  Post.associate = models => {
    // associations can be defined here
  };

  return Post;
};
