import React from 'react';
import coursesData from '../data';
import CourseItem from './CourseItem';

const Courses = () =>
  coursesData.length > 0 && (
    <div className="px-2">
      {coursesData.map((data, idx) => (
        <CourseItem data={data} key={idx} />
      ))}
    </div>
  );


export default Courses;


