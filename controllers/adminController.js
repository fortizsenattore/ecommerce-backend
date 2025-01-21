const { Admin } = require("../models");

async function index(req, res) {
  try {
    const admin = await Admin.findAll();
    return res.status(200).json(admin);
  } catch (err) {
    console.error(err);
  }
}

async function show(req, res) {
  const admin = await Admin.findOne({ where: { id: req.params.id } });
  return res.status(200).json(admin);
}

async function store(req, res) {
  const { firstname, lastname, email, password } = req.body;
  try {
    const admin = await Admin.create({
      firstname,
      lastname,
      email,
      password,
    });
    const thisAdmin = await Admin.findOne({
      where: { email: req.body.email },
      attributes: { exclude: ["password"] },
    });
    const adminNoPassword = { firstname, lastname, email };
    return res.status(200).json(thisAdmin);
  } catch (err) {
    console.error(err);
  }
}

async function update(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    await Admin.update({ firstname, lastname, email, password }, { where: { id: req.params.id } });
    const admin = await Admin.findByPk(req.params.id);
    return res.status(200).json(admin);
  } catch (err) {
    console.error(err);
  }
}

async function destroy(req, res) {
  try {
    const admin = Admin.destroy({ where: { id: req.params.id } });
    return res.status(200).json(admin);
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
