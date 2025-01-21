const { Sequelize } = require("sequelize");

const sequelizeConfig = {
  host: process.env.DB_HOST, // Ej: 127.0.0.1
  dialect: process.env.DB_CONNECTION, // Ej: mysql
  logging: false, // Para que no aparezcan mensajes en consola.
};

if (process.env.DB_CONNECTION === "postgres") {
  sequelizeConfig.dialectModule = require("pg");
}

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  sequelizeConfig,
);

// Requerir todos los modelos:
const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");
const Admin = require("./Admin");
const Brand = require("./Brand");

// Inicializar todos los modelos:
User.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);
Admin.initModel(sequelize);
Brand.initModel(sequelize);

/*
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 *
 * Por ejemplo, si un User está relacionado con un Order, establecerlo
 * aquí abajo.
 */

Brand.hasMany(Product);
Product.belongsTo(Brand);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  sequelize,
  Product,
  User,
  Order,
  Admin,
  Brand,
};
