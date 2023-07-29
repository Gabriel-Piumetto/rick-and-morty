const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.UUID, // Cambia el tipo de dato a UUID
         defaultValue: DataTypes.UUIDV4, // Establece un valor por defecto usando la función uuidv4()
         primaryKey: true, 
      },
      email:{
         type:DataTypes.STRING,
         allowNull:false,
         isEmail:true
      },
      password:{
         type: DataTypes.STRING,
         allowNull:false
      }
   }, { timestamps: false });
};
