const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Descripción: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.CIDR,
      allowNull: false,
    },
    FechaDeLanzamiento: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.DATE,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};

