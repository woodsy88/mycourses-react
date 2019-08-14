import React from 'react';
import Course from './Course';

const CourseList = ({courses}) => {
  console.log('course list', courses);

  if (courses.length === 0) {
    return (
      <div className="empty-search">
        <h3>No courses match your search parameters</h3>
      </div>
    )
  }
  
  return (
    <section className="courseslist"> 
      <div className="courseslist-center">
        {courses.map((course) => {
          return <Course key={course.id} course={course} />
        })}
      </div>
    </section>
  );
};

export default CourseList;