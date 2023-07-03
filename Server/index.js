const express=require('express');
const recipeModel = require('./model/recipeDB');
const cusineModel = require('./model/cusineDB');
const cors = require('cors');

const app= new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

//          ADD RECIPE
app.post('/addrecipe',async(req,res)=>{
    console.log(req.body)
    var data =await recipeModel(req.body);
    data.save();
    res.send({status:"Recipe Added"})
})

//          ADD CUSINE
app.post('/addcusine',async(req,res)=>{
    var data = await cusineModel(req.body);
    data.save();
    res.send({status:"Cusine added"});
})

//          VIEW RECIPE
app.get('/viewrecipe',async(req,res)=>{
    let name = req.params.name
    var data = await recipeModel.find({"cusineName":name});
    res.json(data);
})

//          VIEW CUSINE
app.get('/viewcusine',async(req,res)=>{
    var data = await cusineModel.find();
    res.json(data);
})

//          DELETE RECIPE
app.delete('/deleterecipe/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    await recipeModel.findByIdAndDelete(id);
    res.json({status:"Recipe Deleted"})
})


//          DELETE CUSINE
app.delete('/deletecusine/:name',async(req,res)=>{
    let name = req.params.name;
    await cusineModel.deleteOne({"cusineName":name})
    res.send({status:"Cusine deleted"});
})

//          UPDATE RECIPE
app.put('/updaterecipe/:id',async(req,res)=>{
    console.log(req.params)
    let id = req.params.id;
    try{
        var data = await recipeModel.findByIdAndUpdate(id,req.body)
        res.json({status:"Recipe Updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})

//          UPDATE CUSINE
app.put('/updatecusine/:name',async(req,res)=>{
    let name = req.params.name;
    await cusineModel.updateOne({"cusineName":name},req.body);
    res.send({status:"Cusine updated"});    
})

app.listen(3005,()=>{
    console.log("Server is running in port 3005")
})