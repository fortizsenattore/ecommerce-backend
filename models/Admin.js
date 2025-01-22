const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
      {
        nanoId: {
          type: DataTypes.STRING,
        },
        firstname: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
          set(value) {
            const hash = bcrypt.hashSync(value, 10);
            this.setDataValue("password", hash);
          },
        },
      },
      {
        sequelize,
        modelName: "admin",
      },
    );
    return Admin;
  }
}

module.exports = Admin;
