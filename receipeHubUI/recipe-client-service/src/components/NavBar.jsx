import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import the js-cookie library

export default function NavBar() {
  const chefIdCookie = Cookies.get('ChefId'); // Get the ChefId cookie

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          RecipeHub
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/recipes" color="inherit">
          Recipes
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>

        {chefIdCookie ? ( // Check if ChefId cookie is set
          <Button component={Link} to="/add-recipe" color="inherit">
            Add Recipe
          </Button>
        ) : (
          <div>
            <Button component={Link} to="/register" color="inherit">
              Register
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
