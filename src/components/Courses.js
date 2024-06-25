import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses').then((response) => {
      setCourses(response.data);
    });
  }, []);

  return (
    <Grid container spacing={3}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course._id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{course.title}</Typography>
              <Typography>{course.description}</Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/courses/${course._id}`} size="small">View</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Courses;

