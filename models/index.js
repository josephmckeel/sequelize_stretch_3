const Person = require("./person");
const Recipe = require("./recipe");
//YOUR CODE HERE

Person.hasMany(Recipe, { as: "recipes" });
Recipe.belongsTo(Person);

Person.findWithRecipes = function () {
  return Person.findAll({ include: [{ model: Recipe }] });
};

Person.prototype.writeRecipe = function (recipe) {
  return Recipe.create({ ...recipe, PersonId: this.id });
};

module.exports = { Person, Recipe };
