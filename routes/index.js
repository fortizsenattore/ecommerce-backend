
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");
const brandRoutes = require("./brandRoutes");
const adminRoutes = require("./adminRoutes");
const pageRoutes = require("./pageRoutes")

module.exports = (app) => {
  
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/orders", orderRoutes);
  app.use("/", authRoutes);
  app.use("/brands", brandRoutes);
  app.use("/admins", adminRoutes);
  app.use("/", pageRoutes);
};
