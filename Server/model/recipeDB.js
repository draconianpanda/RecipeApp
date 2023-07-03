const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kiranarakkal16:kirana@cluster0.47et8bv.mongodb.net/RecipeDB?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connected")
})
.catch(err=>console.log(err))

let Schema= mongoose.Schema;

const recipeSchema = new Schema({
    cusineName: String,
    recipeName:String,
    recipeDuration: String,
    servingSize: String,
    recipeImage: String,
});

var recipeModel = mongoose.model("recipe",recipeSchema);

module.exports = recipeModel;