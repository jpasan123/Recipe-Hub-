import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { FavoriteBorderOutlined as FavoriteBorderIcon, ShareOutlined as ShareIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const RecipeGig = ({ recipe }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin: '20px'}}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {recipe.recipeName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.recipeCost}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center" padding={1}>
        <IconButton aria-label="Add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Link to={`/recipe-details/${recipe.id}`}>See More</Link>
      </Box>
    </Card>
  );
};

export default RecipeGig;
