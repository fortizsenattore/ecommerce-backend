const { User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
  }
}

// Display the specified resource.
async function show(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });
  return res.status(200).json(user);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, phone, email, password } = req.body;
  try {
    const user = await User.create({
      firstname,
      lastname,
      phone,
      email,
      password,
    });
    const userNoPassword = { firstname, lastname, phone, email };
    return res.status(200).json(userNoPassword);
  } catch (err) {
    console.error(err);
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const user = User.update({ password: req.body.password }, { where: { email: req.body.email } });
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
  }
}

async function profileUpdate(req, res) {
  const { firstname, lastname, phone, email } = req.body;
  try {
    await User.update({ firstname, lastname, phone, email }, { where: { id: req.params.id } });
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
  }
}

async function destroy(req, res) {}

module.exports = {
  index,
  show,
  store,
  update,
  profileUpdate,
  destroy,
};
