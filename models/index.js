const { Sequelize } = require("sequelize");

const sequelizeConfig = {
  host: process.env.DB_HOST, 
  dialect: process.env.DB_CONNECTION, 
  logging: false, 
};

if (process.env.DB_CONNECTION === "postgres") {
  sequelizeConfig.dialectModule = require("pg");
}

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  // process.env.DB_DATABASE, // Ej: hack_academy_db
  // process.env.DB_USERNAME, // Ej: root
  // process.env.DB_PASSWORD, // Ej: root
  // sequelizeConfig,
);


const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");
const Admin = require("./Admin");
const Brand = require("./Brand");


User.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);
Admin.initModel(sequelize);
Brand.initModel(sequelize);

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
