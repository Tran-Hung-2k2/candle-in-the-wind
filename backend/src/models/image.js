'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Product, {
        foreignKey: 'ID_Product',
        onDelete: 'CASCADE',
      });
    }
  }
  Image.init({
    ID_Image: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ID_Product: {
      type: DataTypes.INTEGER
    },
    content: {
      type: DataTypes.TEXT('medium')
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};