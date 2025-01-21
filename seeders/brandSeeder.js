const { Brand } = require("../models");

module.exports = async () => {
  const brand = [{
    name: "McLaren",
  },
  {
    name: "Porsche",
  },
  {
    name: "Ferrari",
  },
  {
    name: "Rolls Royce",
  },
  {
    name: "Lamborghini",
  },
  {
    name: "Audi",
  },
  ];

  await Brand.bulkCreate(brand);
  console.log("[Database] Se corrió el seeder de Brand.");
};
