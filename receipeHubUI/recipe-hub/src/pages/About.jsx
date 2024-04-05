import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import NavBar from '../components/NavBar';

const AboutPage = () => {
  return (
    <div>
        <NavBar/>
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          About RecipeHub
        </Typography>
        <img
          src="https://img.freepik.com/free-photo/full-table-italian-meals-ai-generated-image_511042-1707.jpg"
          alt="Italian Meals"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Typography variant="body1" paragraph>
          Welcome to RecipeHub, your go-to destination for discovering and sharing delicious recipes from around the world.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to inspire culinary creativity by providing a platform where food enthusiasts can explore a
          diverse collection of recipes, whether you're a seasoned chef or a cooking novice.
        </Typography>
        <Typography variant="body1" paragraph>
          At RecipeHub, you can:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>Discover Recipes:</strong> Explore a wide variety of mouthwatering dishes to satisfy your
              cravings.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Share Your Creations:</strong> Contribute your own recipes to our community and inspire others.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Connect with Food Lovers:</strong> Connect with fellow food enthusiasts, share tips, and engage in
              lively discussions.
            </Typography>
          </li>
        </ul>
        <Typography variant="body1" paragraph>
          Whether you're looking for dinner inspiration, want to showcase your culinary talents, or simply connect with
          others who share your passion for food, RecipeHub is here for you.
        </Typography>
        <Typography variant="body1" paragraph>
          Join us on this gastronomic journey and let's explore the world of flavors together!
        </Typography>
      </Paper>
    </Container>
    </div>
  );
};

export default AboutPage;
