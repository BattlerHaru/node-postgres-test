const { DataTypes } = require("sequelize");

const { BaseModel } = require("./base.model");

class BienesModel extends BaseModel {
  constructor() {
    super();
    (this.articulo = {
      type: DataTypes.STRING,
      validate: { len: [0, 255] },
      allowNull: false,
    }),
      (this.descripcion = {
        type: DataTypes.STRING,
        validate: { len: [0, 255] },

        allowNull: false,
      }),
      (this.userId = {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      });
  }
}

module.exports = {
  BienesModel,
  moduleName: "bienes",
};
