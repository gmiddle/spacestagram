'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: "userId" })
      Post.hasMany(models.Comment, { foreignKey: "postId", onDelete: "CASCADE", hooks: true })
      Post.hasMany(models.Like, { foreignKey: "postId", onDelete: "CASCADE", hooks: true })
    }
  };
  Post.init({
    description: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};