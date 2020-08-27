import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Profile from './profile/Profile';
import Courses from './courses/Courses';
import data from './data/Data';

function App() {
  const allCourses = data;
  const [courses, setCourses] = useState([]);

  // adding courses to my enrollments
  function addCourse(newCourse) {
    let newCourses = [...courses, newCourse];
    setCourses(newCourses);
  }
  
  return (
    <>
      <header>
        <Header></Header>
      </header>
      
      <main className="row">
        <section className="col-lg-4 profile">
          <Profile courses={courses}></Profile>
        </section>

        <section className="mx-auto col-lg-8 row courses">
          {allCourses.map(course => <Courses key={course.id} course={course} addCourse={addCourse}></Courses>)}
        </section>
      </main>
    </>
  );
}

export default App;
