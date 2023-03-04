'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {foreignKey: 'ID_Role'});
      User.hasMany(models.Order, {foreignKey: "ID_User"});
      User.belongsToMany(models.Product, {
        through: "carts",
        foreignKey: "ID_User"
      });
      User.belongsToMany(models.Voucher, {
        through: "voucher_users",
        foreignKey: "ID_User"
      });
      User.hasMany(models.Post, {foreignKey: "ID_User"});
      User.hasMany(models.Comment, {foreignKey: "ID_User"});
    }
  }
  User.init({
    ID_User: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    ID_Role: DataTypes.INTEGER,
    fullname: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    phone_number: DataTypes.STRING(45),
    address: DataTypes.STRING(45),
    password: DataTypes.STRING(45),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};