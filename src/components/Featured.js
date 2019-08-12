import React, { Component } from 'react';
import { ProductContext } from '../context';
import Loading from './Loading';
import Course from './Course';
import Title from './Title';

class Featured extends Component {

  static contextType = ProductContext;

  render() {
    let {loading, featuredCourses: courses} = this.context;
    
    courses = courses.map(course => {
      return <Course key={course.id} course={course} />
    })
    
    return (
      <section className="featured-rooms">
        <Title title="featured courses" />
        {loading ? <Loading /> : courses}
      </section>
    );
  }
}

export default Featured;