import { Button, IconButton, Table, TableCell, TableContainer, TableRow, TextField, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import axios from 'axios';

const AddRecipe = (props) => {
    var navigate = useNavigate();
    var[inp,setInp]=useState(props.data);

    const inputhandler=(e)=>
    {
      const {name,value}= e.target;
      setInp((inp)=>({...inp,[name]:value}));
    }
    const addrecipe=()=>{
      if(props.method==="post")
      {
        axios.post("http://localhost:3005/addrecipe",inp)
        .then(()=>{
             alert("New recipe added");
             navigate('/')
            })
            .catch(err=>{
              console.log(err)
            })
      } 
      if(props.method==="put")
       {
         axios.put("http://localhost:3005/updaterecipe/"+inp._id,inp)
         .then(()=>{
              alert("Recipe updated");
              window.location.reload(false)
             })
             .catch(err=>{
               console.log(err)
             })
       }  
        
        }
   
  return (
    <div style={{paddingTop:'100px'}}>
       <TableContainer>
            <Table style={{width:'50%',marginLeft: 'auto',marginRight:'auto',marginBottom:'110px',borderRadius:'20px',backgroundColor:'grey'}}>
               <TableRow>
                <TableCell  style={{fontFamily:'fantasy',fontSize:'20px',border:'grey'}}>CUISINE NAME</TableCell>
                <TableCell style={{border:'grey'}}><TextField variant='outlined' name='cusineName' value={inp.cusineName} onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}></TextField></TableCell>
               </TableRow>
               <TableRow>
                <TableCell  style={{fontFamily:'fantasy',fontSize:'20px',border:'grey'}}>RECIPE NAME</TableCell>
                <TableCell style={{border:'grey'}}><TextField variant='outlined' name='recipeName' value={inp.recipeName} onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}></TextField></TableCell>
               </TableRow>
               <TableRow>
                <TableCell style={{fontFamily:'fantasy',fontSize:'20px',border:'grey'}}>DURATION FOR COOKING</TableCell>
                <TableCell style={{border:'grey'}}><TextField variant='outlined' name='recipeDuration' value={inp.recipeDuration} onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}></TextField></TableCell>
               </TableRow>
               <TableRow>
                <TableCell style={{fontFamily:'fantasy',fontSize:'20px',border:'grey'}}>NO. OF SERVINGS</TableCell>
                <TableCell style={{border:'grey'}}><TextField variant='outlined' name='servingSize' value={inp.servingSize} onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}></TextField></TableCell>
               </TableRow>
               <TableRow>
                <TableCell style={{fontFamily:'fantasy',fontSize:'20px',border:'grey'}}>IMAGE URL</TableCell>
                <TableCell style={{border:'grey'}}><TextField variant='outlined' name='recipeImage' value={inp.recipeImage} onChange={inputhandler} style={{backgroundColor:'white',width:'100%',borderRadius:'10px'}}></TextField></TableCell>
               </TableRow>

               {/* Button */}
               <TableRow>
                    <TableCell style={{border:'black'}}></TableCell>
                    <TableCell style={{border:'black'}}>
                    <Button variant='contained' onClick={addrecipe} style={{color:'white',backgroundColor:'maroon',width:'100%',height:'50px',borderRadius:'10px'}}>
                    <Tooltip title='Add/Update Recipe'>
                            <IconButton>
                            <AddSharpIcon style={{fontSize:'40px',color:'white'}}/>
                            </IconButton>
                        </Tooltip>
                    </Button>
                    </TableCell>
                  </TableRow>
            </Table>
        </TableContainer>
    </div>
  )
}

export default AddRecipe