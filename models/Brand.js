const { Model, DataTypes } = require("sequelize");

class Brand extends Model {
  static initModel(sequelize) {
    Brand.init(
      {
        name: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "brand",
      },
    );
    return Brand;
  }
}

module.exports = Brand;
