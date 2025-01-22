const faker = require("@faker-js/faker").fakerES;
const { User } = require("../models");

module.exports = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      password: "123",
      phone: 12345678,
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
