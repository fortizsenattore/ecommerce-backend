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
        modelName: "brand", // Nombre del modelo en singular y en minúscula.
      },
    );
    return Brand;
  }
}

module.exports = Brand;
