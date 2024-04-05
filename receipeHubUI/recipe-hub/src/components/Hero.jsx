import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://images2.alphacoders.com/901/901414.jpg')`, // Provided image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 64px)', // Adjust the height as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        position: 'relative', // Added for overlay
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
          zIndex: 1, // Ensures the overlay is on top of the image
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Discover Delicious Recipes
        </Typography>
        <Typography variant="h6" gutterBottom>
          Explore a world of flavors and culinary delights.
        </Typography>
        <Button component={Link} to="/recipes" variant="contained" color="primary" size="large" sx={{ marginRight: 2 }}>
          View All Recipes
        </Button>
        <Button variant="contained" color="secondary" size="large">
          Add Your Own Recipe
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
