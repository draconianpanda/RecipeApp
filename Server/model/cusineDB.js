const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kiranarakkal16:kirana@cluster0.47et8bv.mongodb.net/RecipeDB?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connected");
})
.catch(err=>console.log(err));

let Schema= mongoose.Schema;

const cusineSchema = new Schema({
    cusineName:String,
    cusineDuration:Number,
    cusineServingSize:Number,
    cusineImage:String
})

var cusineModel= mongoose.model("cusine",cusineSchema);

module.exports = cusineModel;