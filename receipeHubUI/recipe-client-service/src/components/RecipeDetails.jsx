import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Paper, Card, CardContent, Typography, CardMedia } from '@mui/material';
import NavBar from './NavBar';

function getYouTubeVideoId(url) {
  const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : '';
}

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch recipe data:', error);
      });
  }, [id]);

  return (
    <div><NavBar/>
    <div>
      {recipe ? (
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Card>
            <CardMedia
              component="iframe"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                recipe.youtubeVideoLink
              )}`}
              title={recipe.recipeName}
              height="315"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {recipe.recipeName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Cost: {recipe.recipeCost}
              </Typography>
              <br/>
              <Typography variant="body2" color="textSecondary">
                Ingredients: {recipe.recipeIngredients}
              </Typography>
              <br/>
              <Typography variant="body2" color="textSecondary">
                Description: {recipe.methodDescription}
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
}
