const { Router } = require("express");
const { check } = require("express-validator");

const { authLogin, authSignUp } = require("../controllers/auth.controller");

const { fieldsValidate } = require("../middlewares/fields.validate");

const { isUsuarioExists } = require("../helpers/db.validators");

const router = Router();

router.post(
  "/login",
  [
    check("usuario", "El usuario es obligatorio.").not().isEmpty(),
    check("password", "La contraseña es obligatoria.").not().isEmpty(),

    fieldsValidate,
  ],
  authLogin
);

router.post(
  "/signup",
  [
    check("nombre", "El nombre es obligatorio.").not().isEmpty(),
    check("usuario", "El usuario es obligatorio.").not().isEmpty(),
    check("usuario", "El usuario ya se encuentra registrado").custom(
      isUsuarioExists
    ),
    check("password", "La contraseña es obligatoria.").not().isEmpty(),

    fieldsValidate,
  ],
  authSignUp
);

module.exports = router;
