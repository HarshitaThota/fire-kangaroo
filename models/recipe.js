const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const recipeSchema = new Schema({
  title: {
    type: String,
    required: true  
  },
  ingredients:{
    type: String,
    required: true
  },
  servings:{
    type: String,
    required: true
  },
  instructions:{
    type: String,
    required: true
  }
}, {timestamps: true});

//create model
const Recipe = mongoose.model("Recipe", recipeSchema);

//export
module.exports = Recipe;