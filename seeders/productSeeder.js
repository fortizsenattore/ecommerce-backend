const allProducts = require("../products.js");
const { Product } = require("../models");

module.exports = async () => {
  await Product.bulkCreate(allProducts);
  console.log("[Database] Se corrió el seeder de Productos.");
};
