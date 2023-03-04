'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {foreignKey: 'ID_User'});
      Order.belongsToMany(models.Product, {
        through: "order_details",
        foreignKey: "ID_Order"
      });
    }
  }
  Order.init({
    ID_Order: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_User: {
      type: DataTypes.INTEGER
    },
    total_money: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};