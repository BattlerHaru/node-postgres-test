const { DataTypes } = require("sequelize");

const { BaseModel } = require("./base.model.js");

class UserModel extends BaseModel {
  constructor() {
    super();
    (this.nombre = {
      type: DataTypes.STRING,
      allowNull: false,
    }),
      (this.usuario = {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      }),
      (this.password = {
        type: DataTypes.STRING,
        allowNull: false,
      });
  }
}

module.exports = {
  UserModel,
  moduleName: "user",
};
