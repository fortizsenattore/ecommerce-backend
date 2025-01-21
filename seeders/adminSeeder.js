const { Admin } = require("../models");

module.exports = async () => {
  const admin = [{
    firstname: "admin",
    lastname: "admin",
    email: "admin@admin.com",
    password: "123",
  }];

  await Admin.bulkCreate(admin);
  console.log("[Database] Se corrió el seeder de Admin.");
};
