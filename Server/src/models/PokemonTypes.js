const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PokemonType",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

// id: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   primaryKey: true,
// },
