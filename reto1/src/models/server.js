const express = require("express");
const cors = require("cors");

const db = require("../database/config");

class Server {
  constructor() {
    // express
    this.app = express();
    this.port = process.env.PORT;

    // Auth
    // api path
    this.authPath = "/api/auth";
    // directory
    this.authDir = "../routes/auth.routes";

    // Bienes
    // api path
    this.bienesPath = "/api/bienes";
    // directory
    this.bienesDir = "../routes/bienes.routes";

    // DB Connect
    this.connectDB();

    // Middleware
    this.middleware();

    // Rutas
    this.routes();
  }

  async connectDB() {
    try {
      await db.sequelize.authenticate();
      // force sync to restart database
      // await db.sequelize.sync({ force: true });
      await db.sequelize.sync();

      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  middleware() {
    // CORS
    this.app.use(cors());

    // read and parse body
    this.app.use(express.json());

    // public directory (example)
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.bienesPath, require(this.bienesDir));
    this.app.use(this.authPath, require(this.authDir));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`listening at http://localhost:${this.port}.`);
    });
  }
}

module.exports = Server;
