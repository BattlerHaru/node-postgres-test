const { response, request } = require("express");
require("dotenv").config();

const db = require("../database/config");
const Bienes = db.bienes;

// Create
const BienesCreate = async (req = request, res = response) => {
  const uid = req.uid;
  const { articulo, descripcion } = req.body;

  try {
    // Update database
    let newArticle = await Bienes.create({
      articulo: articulo,
      descripcion: descripcion,
      userId: uid,
    });

    res.json({
      ok: true,
      msg: "Articulo creado con éxito",
      articulo: newArticle,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error, hable con el administrador.",
      error: error,
    });
  }
};

// Get All
const BienesGetAll = async (req = request, res = response) => {
  try {
    // Read database
    let articleList = await Bienes.findAll({});

    res.json({
      ok: true,
      msg: "Lista de Articulos",
      articulos: articleList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error, hable con el administrador.",
      error: error,
    });
  }
};

// Get by ID
const BienesGetByID = async (req = request, res = response) => {
  const id = req.params.id;
  try {
    // Read database
    let articleList = await Bienes.findByPk(id);

    res.json({
      ok: true,
      msg: `Articulo: ${id}`,
      articulos:
        articleList < 1
          ? "No se ha encontrado algún articulo con ese ID"
          : articleList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error, hable con el administrador.",
      error: error,
    });
  }
};

// Update
const BienesUpdate = async (req = request, res = response) => {
  // Article id
  const id = req.params.id;
  // User id
  const uid = req.uid;
  const { articulo, descripcion } = req.body;

  try {
    // Find article by id
    const bienes = await Bienes.findByPk(id);

    if (!bienes) {
      return res.status(401).json({
        msg: "No existe un articulo con ese ID",
      });
    }

    const updateBienes = {
      articulo: articulo,
      descripcion: descripcion,
      userId: uid,
    };

    const updateBienesData = await Bienes.update(updateBienes, {
      where: { id: id },
    });

    res.json({
      ok: true,
      msg: "Articulo modificado con éxito",
      articulo: updateBienesData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error, hable con el administrador.",
      error: error,
    });
  }
};

// Delete
// Nota, Considero que eliminar un elemento de la base de datos no es lo correcto, pues en algún momento se puede necesitar, por lo que yo recomendaría agregar un campo de estatus, donde se utilice un update, para poder desactivar ese elemento, o en su defecto, utilizar una tabla de logs
const BienesDelete = async (req = request, res = response) => {
  // Article id
  const id = req.params.id;
  // User id
  const uid = req.uid;

  try {
    // Find article by id
    const bienes = await Bienes.findByPk(id);

    if (!bienes) {
      return res.status(401).json({
        msg: "No existe un articulo con ese ID",
      });
    }

    const bienesData = await Bienes.destroy({
      where: { id: id },
    });

    res.json({
      ok: true,
      msg: "Articulo eliminado con éxito",
      articulo: bienesData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Ha ocurrido un error, hable con el administrador.",
      error: error,
    });
  }
};

// Get Multi ID
const BienesGetMultiIDs = async (req = request, res = response) => {
  const { ids } = req.body;

  try {
    // Read database
    let articleList = await Bienes.findAll({ id: ids });

    res.json({
      ok: true,
      msg: `Lista de Articulos de los ids: ${ids}`,
      articulos: articleList,
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
  BienesCreate,
  BienesGetAll,
  BienesGetByID,
  BienesUpdate,
  BienesDelete,
  BienesGetMultiIDs,
};
