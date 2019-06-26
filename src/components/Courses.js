import React from 'react';
import CourseItem from './CourseItem';
import { ProductConsumer } from '../context';

const Courses = () => (
 <React.Fragment>
    <div className="px-2">
      <ProductConsumer>
          {value => {
            return value.courses.map((course) => (
              <CourseItem data={course} key={course.id} />
            ))
          }}
      </ProductConsumer>
    </div>
  </React.Fragment>       
  );


export default Courses;
