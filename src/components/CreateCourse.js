import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@material-ui/core';

function CreateCourse() {
  const [course, setCourse] = useState({ title: '', description: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/courses', course).then((response) => {
      // Redirect or update the UI as needed
    });
  };

  return (
    <Container>
      <Typography variant="h4">Create Course</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={course.title}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Description"
          name="description"
          value={course.description}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Content"
          name="content"
          value={course.content}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </form>
    </Container>
  );
}

export default CreateCourse;

