import { Button, Card, CardActions, CardContent, Grid, IconButton, Tooltip} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { useLocation } from 'react-router-dom';
import AddRecipe from './AddRecipe';
import '../Components/Style.css';


const Recipe = () => {
  const location = useLocation();
  console.log("location",location.state.cuiname);
  const[recipes,setRecipes]=useState([]);
  const[update,setUpdate]=useState(false);
  const [singlevalue,setSinglevalue]=useState([]);
 
  useEffect(()=>{
    axios.get("http://localhost:3005/viewrecipe/"+location.state.cuiname)
    .then((response)=>{
        setRecipes(response.data);
    })
   },[location.state.cuiname]);

// TO EDIT A RECIPE
   const editrecipe=(value)=>{
    setUpdate(true);
    setSinglevalue(value);
     }  

// TO DELETE A RECIPE
const deleterecipe=(id)=>{
  axios.delete("http://localhost:3005/deleterecipe/"+id)
  .then(()=>{
    alert("Recipe deleted");
    window.location.reload(false);
   })
   .catch(err=>{
     console.log(err)
   })
 }

 var finalJSX =    
 
    <Grid container spacing={2} style={{marginBottom:"100px",paddingTop:'50px'}}>
      {
          recipes.map((val,index)=>{
          return(

          <Grid item xs={12} sm ={6} md={3}>

              <Card sx={{ maxWidth: 345 }}>
                      
                      <CardContent>
                      <img style={{width:"300px",height:"300px",borderRadius:'10px'}} src={val.recipeImage} alt="Card img"/>
                      <h2 style={{fontFamily:'fantasy'}}>{val.recipeName}</h2>
                      <br /><br />
                      <p style={{fontFamily:'fantasy'}}>Duration for cooking: {val.recipeDuration}</p>
                      <p style={{fontFamily:'fantasy'}}>No. of Servings: {val.servingSize}</p>
                        </CardContent>
                        <CardActions>
                        <Button variant='contained' style={{color:'rgb(184, 182, 182)',backgroundColor:'#128A85',marginLeft:'90px'}} onClick={()=>editrecipe(val)}>
                      <Tooltip title='Edit Recipe'>
                      <IconButton>
                      <EditSharpIcon style={{fontSize:'20px',color:'black'}}/>
                      </IconButton>
                      </Tooltip>
                      </Button>
                      &nbsp;&nbsp;
                      {/* DELETE BUTTON */}
                      <Button variant='contained'style={{color:'rgb(184, 182, 182)',backgroundColor:'#128A85'}} onClick={()=>deleterecipe(val._id)}>
                      <Tooltip title='Delete Recipe'>
                      <IconButton>
                      <DeleteSharpIcon style={{fontSize:'20px',color:'black'}}/>
                      </IconButton>
                      </Tooltip>
                      </Button>
                      </CardActions>
                </Card>

          </Grid>
                )
            })
          } 
      </Grid>

if(update) finalJSX = <AddRecipe data={singlevalue} method='put'/>
return finalJSX;
};

export default Recipe