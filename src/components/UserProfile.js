import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@material-ui/core';

function UserProfile() {
  const [user, setUser] = useState({ email: '', role: '' });

  useEffect(() => {
    axios.get('/api/users/me').then((response) => {
      setUser(response.data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/users/me', user).then((response) => {
      setUser(response.data);
    });
  };

  return (
    <Container>
      <Typography variant="h4">Profile</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Role"
          name="role"
          value={user.role}
          onChange={handleChange}
          fullWidth
          disabled
        />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </form>
    </Container>
  );
}

export default UserProfile;

