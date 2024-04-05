import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import RecipeGig from '../components/RecipeGig';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  padding: '20px',
};

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch recipe data
    axios.get('http://localhost:5050/recipes')
      .then((response) => {
        // Set the fetched data in the state
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <>
      <NavBar />
      <div style={gridContainerStyle}>
        {recipes.map((recipe) => (
          <RecipeGig key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
