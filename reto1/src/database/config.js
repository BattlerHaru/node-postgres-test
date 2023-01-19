const { Sequelize } = require("sequelize");

// Models
const Base = require("../models/base.model");
const User = require("../models/user.model");
const Bienes = require("../models/bienes.model");

const sequelize = new Sequelize(
  process.env.DB_POSTGRES_DB_NAME,
  process.env.DB_POSTGRES_USER,
  process.env.DB_POSTGRES_PASSWORD,
  {
    host: process.env.DB_POSTGRES_HOST,
    port: process.env.DB_POSTGRES_PORT,
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Create tables
db.user = sequelize.define(User.moduleName, new User.UserModel());
db.bienes = sequelize.define(Bienes.moduleName, new Bienes.BienesModel());

// Rel-ref
db.bienes.belongsTo(db.user);

module.exports = db;
