const { DataTypes } = require("sequelize");

class BaseModel {
  constructor() {
    (this.id = {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }),
      (this.created_at = {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      }),
      (this.updated_at = {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        allowNull: false,
      });
  }
}

module.exports = {
  BaseModel,
  moduleName: "base",
};
