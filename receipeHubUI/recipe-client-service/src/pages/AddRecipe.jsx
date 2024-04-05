import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import NavBar from '../components/NavBar';

export default function AddRecipe() {
  const [recipeData, setRecipeData] = useState({
    recipeName: '',
    recipeCost: 0.0,
    recipeIngredients: '',
    methodDescription: '',
    youtubeVideoLink: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleAddRecipe = () => {
    axios
      .post('http://localhost:5050/recipes', recipeData)
      .then((response) => {
        // Handle success, e.g., display a success message
        alert('Recipe added successfully:', response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        alert('Failed to add recipe:', error);
      });
  };

  return (
    <div><NavBar/>
    <div style={{marginLeft: '10%', marginRight: '10%'}}>
      <h2>Add Recipe</h2>
      <TextField
        name="recipeName"
        label="Recipe Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={recipeData.recipeName}
        onChange={handleInputChange}
      />
      <TextField
        name="recipeCost"
        label="Recipe Cost"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        value={recipeData.recipeCost}
        onChange={handleInputChange}
      />
      <TextField
        name="recipeIngredients"
        label="Recipe Ingredients"
        variant="outlined"
        fullWidth
        margin="normal"
        value={recipeData.recipeIngredients}
        onChange={handleInputChange}
      />
      <TextField
        name="methodDescription"
        label="Method Description"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={recipeData.methodDescription}
        onChange={handleInputChange}
      />
      <TextField
        name="youtubeVideoLink"
        label="YouTube Video Link"
        variant="outlined"
        fullWidth
        margin="normal"
        value={recipeData.youtubeVideoLink}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" onClick={handleAddRecipe}>
        Add Recipe
      </Button>
    </div>
    </div>
  );
}
