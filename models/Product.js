const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        model: {
          type: DataTypes.STRING,
          defaultValue: "",
        },
        description: {
          type: DataTypes.TEXT,
          defaultValue: "",
        },
        image: {
          type: DataTypes.STRING,
          defaultValue: "",
        },
        imageProduct: {
          type: DataTypes.STRING,
          defaultValue: "",
        },
        photos: {
          type: DataTypes.JSON,
          defaultValue: [],
        },
        featured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        price: {
          type: DataTypes.DECIMAL,
          defaultValue: 0,
        },
        stock: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        year: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        engine: {
          type: DataTypes.TEXT,
          defaultValue: "",
        },
      },
      {
        sequelize,
        modelName: "product",
      },
    );

    return Product;
  }
}

module.exports = Product;
