import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Cusine from './Components/Cusine';
import AddCusine from './Components/AddCusine';
import Recipe from './Components/Recipe';
import AddRecipe from './Components/AddRecipe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Cusine/>} />
        <Route path='/viewrecipes' element={<Recipe/>} />
        <Route path='/addrecipe' element={<AddRecipe data={{cusineName:'',recipeName:'',recipeDuration:'',servingSize:'',recipeImage:''}} method='post'/>} />
        <Route path='/addcusine' element={<AddCusine data={{cusineName:'',cusineDuration:'',cusineServingSize:'',cusineImage:''}} method='post'/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;