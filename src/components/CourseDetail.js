import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    axios.get(`/api/courses/${id}`).then((response) => {
      setCourse(response.data);
    });
  }, [id]);

  return (
    <Container>
      <Typography variant="h4">{course.title}</Typography>
      <Typography variant="body1">{course.content}</Typography>
    </Container>
  );
}

export default CourseDetail;

