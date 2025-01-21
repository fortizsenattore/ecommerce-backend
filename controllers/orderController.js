const { Order } = require("../models");

async function index(req, res) {
  try {
    const orders = await Order.findAll({ include: "user" });
    return res.status(200).json(orders);
  } catch (err) {
    console.error(err);
  }
}

async function show(req, res) {
  try {
    const order = await Order.findOne({ where: { id: req.params.id }, include: "user" });
    return res.status(200).json(order);
  } catch (err) {
    console.error(err);
  }
}

async function store(req, res) {
  const { address, cart, nanoId } = req.body;
  try {
    const order = await Order.create({
      address,
      productList: cart,
      userId: req.auth.sub,
      nanoId,
      status: "Pending",
    });
    return res.status(200).json(order);
  } catch (err) {
    console.error(err);
  }
}

async function update(req, res) {
  try {
    const { address, status } = req.body;
    await Order.update({ address, status }, { where: { id: req.params.id }, include: "user" });
    const order = await Order.findByPk(req.params.id, { include: "user" });
    return res.status(200).json(order);
  } catch (err) {
    console.error(err);
  }
}

async function destroy(req, res) {
  try {
    const order = await Order.destroy({ where: { id: req.params.id } });
    return res.status(200).json(order);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
