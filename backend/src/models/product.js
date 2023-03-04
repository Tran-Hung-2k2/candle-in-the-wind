'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: 'ID_Category',
        onDelete: 'CASCADE',
      });
      Product.hasMany(models.Image, {foreignKey: 'ID_Product'});
      Product.belongsToMany(models.Order, {
        through: "order_details",
        foreignKey: "ID_Product"
      });
      Product.belongsToMany(models.User, {
        through: "carts",
        foreignKey: "ID_Product"
      });
    }
  }
  Product.init({
    ID_Product: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_Category: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};