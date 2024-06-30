import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Course({ match }) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`/api/courses/${match.params.id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the course!', error);
      });
  }, [match.params.id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
}

export default Course;

