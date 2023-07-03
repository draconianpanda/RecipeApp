import { Button,Card,CardActions,CardContent,Grid,IconButton, Tooltip} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import AddCusine from './AddCusine';
import { Link, useNavigate } from 'react-router-dom';


const Cusine = () => {
    const navigate = useNavigate();
    const[cuisines,setCuisines]=useState([]);
    const[update,setUpdate]=useState(false);
    const[singlevalue,setSinglevalue]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3005/viewcusine")
        .then((response)=>{
            setCuisines(response.data);
        })
       },[]);
     

    //    TO UPDATE A CUSINE
    const updatecusine=(value)=>{
        setUpdate(true);
        setSinglevalue(value);
         }  
    // TO DELETE A CUSINE
    const deletecusine=(name)=>{
        console.log("name:",name);
        axios.delete("http://localhost:3005/deletecusine/"+name)
        .then(()=>{
          alert("Cusine deleted");
          window.location.reload(false);      
        })
        .catch(err=>{
          console.log(err)
        })
      }

      const gotorecipes=(cusinename)=>{
        console.log("values",cusinename)
      navigate('/viewrecipes',{state: {cuiname:cusinename}});
      }

   var finalJSX = 
    <Grid container spacing={2} style={{marginBottom:"100px",paddingTop:'50px',marginLeft:'10px'}}>
      {
        cuisines.map((val,index)=>{
    return(
      <Grid item xs={12} sm ={6} md={4}>

      <Card sx={{ maxWidth: 450, maxHeight: 800 }} style={{paddingBottom:'50px',backgroundColor:'#c2ebe9',borderRadius:'10px'}}>
      <CardContent>
          <img style={{width:"400px",height:"200px",borderRadius:'10px'}} src={val.cusineImage} alt="Card cap"/>            
          <h2 style={{fontFamily:'fantasy'}}>{val.cuisine_name}</h2>
          <br /><br />
          <p style={{fontFamily:'fantasy'}}>Duration for cooking: {val.cusineDuration}</p>
          <p style={{fontFamily:'fantasy'}}>No. of Servings: {val.cusineServingSize}</p>
      </CardContent>
      <CardActions>
      {/* EDIT BUTTON */}
      <Button variant='contained' style={{color:'rgb(184, 182, 182)',backgroundColor:'#128A85',height:'30px',marginLeft:'145px',marginBottom:'50px'}} onClick={()=>updatecusine(val)}>
      <Tooltip title='Edit Cusine'>
      <IconButton>
      <EditSharpIcon style={{fontSize:'20px',color:'black'}}/>
      </IconButton>
      </Tooltip>
      </Button>
      &nbsp;&nbsp;
      {/* DELETE BUTTON */}
      <Button variant='contained'style={{color:'rgb(184, 182, 182)',backgroundColor:'#128A85',height:'30px',marginBottom:'50px'}} onClick={()=>deletecusine(val.cusineName)}>
      <Tooltip title='Delete Cuisine'>
      <IconButton>
      <DeleteSharpIcon style={{fontSize:'20px',color:'black'}}/>
      </IconButton>
      </Tooltip>
      </Button>
      <br />
      </CardActions>
      <CardActions>
      <Button variant='contained' style={{backgroundColor:'black',marginLeft:'50px'}} onClick={()=>gotorecipes(val.cusineName)}>View {val.cusineName} Recipes</Button>
      <Button variant='contained' style={{backgroundColor:'black'}}><Link to={'/addrecipe'}  style={{color:'white',textDecoration:'none'}}>Add New Recipe</Link></Button>
      </CardActions>
    </Card>
    </Grid>                      
    )
    })
} 
</Grid>

if(update) finalJSX = <AddCusine data={singlevalue} method='put'/>
 return finalJSX;

};

export default Cusine