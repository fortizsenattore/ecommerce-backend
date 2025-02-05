const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        nanoId: {
          type: DataTypes.STRING,
        },
        address: {
          type: DataTypes.STRING,
        },
        status: {
          type: DataTypes.STRING,
        },
        productList: {
          type: DataTypes.JSON,
          defaultValue: [],
        },
      },
      {
        sequelize,
        modelName: "order",
      },
    );

    return Order;
  }
}

module.exports = Order;
