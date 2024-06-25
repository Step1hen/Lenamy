import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserProfile from './components/UserProfile';
import CreateCourse from './components/CreateCourse';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/courses" component={Courses} exact />
          <Route path="/courses/:id" component={CourseDetail} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/create-course" component={CreateCourse} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

