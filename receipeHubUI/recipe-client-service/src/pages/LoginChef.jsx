import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Cookies from 'js-cookie';


export default function LoginChef() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Send a POST request to validate login
    axios
      .post('http://localhost:8081/chefs/login', {
        username: "",
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        // Handle success (you can add further actions here)
        alert('Login successful');
        Cookies.set('ChefId', response.data);
        window.location.href = '/recipes';
      })
      .catch((error) => {
        // Handle errors (you can add error handling here)
        console.error('Login failed', error);
      });
  };

  return (
    <div><NavBar/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <center><h3>Chef login</h3></center>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
    </div>
  );
}
