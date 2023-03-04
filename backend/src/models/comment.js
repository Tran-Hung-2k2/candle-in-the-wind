'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {foreignKey: 'ID_User'});
      Comment.belongsTo(models.Post, {foreignKey: 'ID_Post'});
      Comment.hasMany(models.Comment, {foreignKey: 'ID_Parent_cmt'});
      Comment.belongsTo(models.Comment, {foreignKey: 'ID_Parent_cmt', as: 'Parent'});
    }
  }
  Comment.init({
    ID_Comment: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    ID_User: DataTypes.INTEGER,
    ID_Post: DataTypes.INTEGER,
    ID_Parent_cmt: DataTypes.INTEGER,
    content: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};