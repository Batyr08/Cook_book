const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Favorite }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Favorite, { foreignKey: 'recipeId' });
    }
  }
  Recipe.init({
    img: DataTypes.STRING,
    description: DataTypes.TEXT,
    ingredients: DataTypes.STRING,
    time: DataTypes.INTEGER,
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
