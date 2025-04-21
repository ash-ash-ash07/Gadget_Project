import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [isValidUser, setIsValidUser] = useState(true);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Mock validation logic for demo purposes
    if (loginData.username === 'admin' && loginData.password === '123456') {
      alert('Login Successful!');
    } else {
      alert('Username and password isn’t valid');
      setIsValidUser(false);
    }
  };

  return (
    <Box
      sx={{
        width: '400px',
        margin: 'auto',
        padding: '20px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form>
        {['username', 'password'].map((field) => (
          <TextField
            key={field}
            name={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!isValidUser && field === 'password'}
            helperText={!isValidUser && field === 'password' ? 'Invalid username or password' : ''}
          />
        ))}
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Login;