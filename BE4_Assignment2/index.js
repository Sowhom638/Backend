const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const { initializeDatabase } = require("./db/db.connect");
const Recipe = require("./models/recipe.models")

initializeDatabase();


async function createRecipe(newRecipe) {
  try {
    const recipe = new Recipe(newRecipe)
    const savedRecipe = await recipe.save()
    return savedRecipe;
  } catch (error) {
    throw error
  }
}
app.post("/recipes", async (req, res) => {
    try {
        const savedRecipe = await createRecipe(req.body)
        res.status(201).json({ message: "Recipe added successfully.", Recipe: savedRecipe })
    } catch (error) {
        res.status(500).json({ error })
    }
})

async function readRecipeByTitle(RecipeTitle){
  try {
    const recipe = await Recipe.findOne({title: RecipeTitle});
    return recipe;
    
  } catch (error) {
    throw error;
  }
}
app.get("/recipes/:title",async (req, res)=>{
  try {
    const recipe = await readRecipeByTitle(req.params.title);
  if(recipe.length != 0){
    res.status(200).json({ message: "Recipe data founded successfully.",recipe});
  }else{
res.status(404).json({ error: "Recipe not Found." });
  }
  } catch (error) {
    res.status(400).json({ error});
  }
})

async function readAllRecipes(){
  try {
    const recipe = await Recipe.find();
    return recipe;
    
  } catch (error) {
    throw error;
  }
}
// readAllRecipes();
app.get("/recipes",async (req, res)=>{
  try {
    const recipe = await readAllRecipes();
  if(recipe.length != 0){
    res.status(200).json({ message: "Recipe data founded successfully.",recipe});
  }else{
res.status(404).json({ error: "Recipe not Found." });
  }
  } catch (error) {
    res.status(400).json({ error });
  }
})

async function readRecipesByAuthor(AuthorName){
  try {
    const recipe = await Recipe.find({author: AuthorName});
    return recipe;
    
  } catch (error) {
    throw error;
  }
}
app.get("/recipes/authors/:author",async (req, res)=>{
  try {
    const recipe = await readRecipesByAuthor(req.params.author);
  if(recipe.length != 0){
    res.status(200).json({ message: "Recipe data founded successfully.", recipe});
  }else{
res.status(404).json({ error: "Recipe not Found." });
  }
  } catch (error) {
    res.status(400).json({ error });
  }
})

async function readRecipesByDifficulty(){
  try {
    const recipe = await Recipe.find({difficulty: 'Easy'});
    return recipe;
  } catch (error) {
    throw error;
  }
}
app.get("/recipes/difficulty/easy",async (req, res)=>{
  try {
    const recipe = await readRecipesByDifficulty();
  if(recipe.length != 0){
    res.status(200).json({ message: "Recipe data founded successfully.", recipe});
  }else{
res.status(404).json({ error: "Recipe not Found." });
  }
  } catch (error) {
    res.status(400).json({ error });
  }
})

async function updateRecipe(RecipeId, dataToUpdate) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(RecipeId, dataToUpdate, {
            new: true,
        });
        return updatedRecipe;
    } catch (error) {
        console.log("Error in updating Recipe rating", error);
    }
}
app.post("/recipes/:RecipeId", async (req, res) => {
    try {
        const updatedRecipe = await updateRecipe(req.params.RecipeId, req.body);
        if (updatedRecipe) {
            res.status(200).json({ message: "Recipe updated successfully.", updatedRecipe });
        } else {
            res.status(404).json({ error: "Recipe not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "failed to update Recipe" });
    }
});
async function updateRecipeBasedOnTitle(Title, dataToUpdate) {
    try {
        const updatedRecipe = await Recipe.findOneAndUpdate({title: Title}, dataToUpdate, {
            new: true,
        });
        return updatedRecipe;
    } catch (error) {
        console.log("Error in updating Recipe rating", error);
    }
}
app.post("/recipes/title/:title", async (req, res) => {
    try {
        const updatedRecipe = await updateRecipeBasedOnTitle(req.params.title, req.body);
        if (updatedRecipe) {
            res.status(200).json({ message: "Recipe updated successfully.", updatedRecipe });
        } else {
            res.status(404).json({ error: "Recipe not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "failed to update Recipe" });
    }
});

async function deleteRecipe(RecipeId) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(RecipeId);
        return deletedRecipe;
    } catch (error) {
        console.log(error);
    }
}
app.delete("/recipes/:RecipeId", async (req, res) => {
    try {
        const deletedRecipe = await deleteRecipe(req.params.RecipeId);
        if (deletedRecipe) {
            res.status(200).json({ message: "Recipe deleted successfully.", deletedRecipe });
        }else{
          res.status(404).json({ error: "Recipe not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete Recipe" });
    }
});


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`);
})