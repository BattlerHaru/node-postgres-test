const { Router } = require("express");
const { check } = require("express-validator");

const { fieldsValidate } = require("../middlewares/fields.validate");

const { jwtValidate } = require("../middlewares/jwt.validate");

const {
  BienesCreate,
  BienesGetAll,
  BienesUpdate,
  BienesDelete,
  BienesGetMultiIDs,
  BienesGetByID,
} = require("../controllers/bienes.controller");

const router = Router();

// Create
router.post(
  "/",
  [
    jwtValidate,
    check("articulo", "El articulo es obligatorio.").not().isEmpty(),
    check("descripcion", "La descripcion del articulo es obligatorio.")
      .not()
      .isEmpty(),

    fieldsValidate,
  ],
  BienesCreate
);

// Read
router.get("/all", [], BienesGetAll);

// Update
router.put(
  "/:id",
  [
    jwtValidate,
    check("articulo", "El articulo es obligatorio.").not().isEmpty(),
    check("descripcion", "La descripcion del articulo es obligatorio.")
      .not()
      .isEmpty(),

    fieldsValidate,
  ],
  BienesUpdate
);

// Delete
router.delete("/:id", [jwtValidate], BienesDelete);

// get Multi ID
router.get("/ids", [], BienesGetMultiIDs);

// get by id
router.get("/:id", [], BienesGetByID);

module.exports = router;
