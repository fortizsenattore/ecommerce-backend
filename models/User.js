const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  static initModel(sequelize) {
    User.init(
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
        phone: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "user", 
      },
    );
    return User;
  }
}

module.exports = User;
