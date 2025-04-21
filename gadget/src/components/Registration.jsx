import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Registration = () => {
  const [formData, setFormData] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isRegistered) {
      alert('Already registered user, please log in.');
    } else {
      console.log('Form Submitted:', formData);
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
        Registration
      </Typography>
      <form>
        {['name', 'age', 'dob', 'email', 'phone', 'address', 'username', 'password', 'confirmPassword'].map((field) => (
          <TextField
            key={field}
            name={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        ))}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Registration;