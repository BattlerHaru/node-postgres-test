const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const { jwtGenerate } = require("../helpers/jwt.generate");
const { hashPass } = require("../helpers/db.validators");

const db = require("../database/config");
const Users = db.user;

const authLogin = async (req = request, res = response) => {
  const { usuario, password } = req.body;
  try {
    const user = await Users.findOne({ where: { usuario: usuario } });

    if (!user) {
      return res.status(400).json({
        msg: "El usuario o la contraseña son incorrectos.",
      });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "El usuario o la contraseña son incorrectos.",
      });
    }

    const token = await jwtGenerate(user["id"]);
    return res.json({
      msg: "Inicio de sesión exitoso.",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error, hable con el administrador.",
      error: error,
    });
  }
};

const authSignUp = async (req = request, res = response) => {
  const { nombre, usuario, password } = req.body;

  try {
    let hashPassword = hashPass(password);

    let newUser = await Users.create({
      nombre: nombre,
      usuario: usuario,
      password: hashPassword,
    });

    const token = await jwtGenerate(newUser.id);
    res.json({
      msg: "Token generado con éxito.",
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error, hable con el administrador.",
      error: error,
    });
  }
};

module.exports = {
  authLogin,
  authSignUp,
};
