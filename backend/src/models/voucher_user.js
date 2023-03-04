'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Voucher_User.init({
    ID_VU: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_Voucher: {
      type: DataTypes.INTEGER,
    },
    ID_User: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Voucher_User',
  });
  return Voucher_User;
};