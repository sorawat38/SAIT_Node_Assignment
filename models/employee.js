const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Employee = sequelize.define("employee", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Employee;
