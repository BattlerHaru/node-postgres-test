const bcryptjs = require("bcryptjs");

const db = require("../database/config");
const User = db.user;

const isUsuarioExists = async (newUser = "") => {
  const userExists = await User.findOne({ where: { usuario: newUser } });

  if (userExists) {
    throw new Error(`El usuario: ${newUser}, ya está registrado.`);
  }
};

const hashPass = (password = "") => {
  const salt = bcryptjs.genSaltSync(); //10
  const hash = bcryptjs.hashSync(password, salt);

  return hash;
};

module.exports = {
  isUsuarioExists,
  hashPass,
};
