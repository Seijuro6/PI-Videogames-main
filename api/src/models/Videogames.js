const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },    
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Descripción: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Plataformas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FechaDeLanzamiento: {
      type: DataTypes.STRING,
      // defaultValue: DataTypes.DATE,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },{timestamps: false});
};

