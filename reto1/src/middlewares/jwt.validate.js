const jwt = require("jsonwebtoken");

const { response, request } = require("express");

const db = require("../database/config");
const Users = db.user;

const jwtValidate = async (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "No existe el token en la petición.",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    const user = await Users.findByPk(uid);

    if (!user) {
      return res.status(401).json({
        msg: "Token no válido.1",
      });
    }

    req.uid = uid;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      msg: "Token no válido.3",
    });
  }
};

module.exports = {
  jwtValidate,
};
