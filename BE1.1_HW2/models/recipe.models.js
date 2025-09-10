const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
  },
  preppingTime: {
    type: Number,
  },
  cookingTime: {
    type: Number,
  },
  ingredients: {
    type: [String],
    default: [],
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
