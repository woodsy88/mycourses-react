import React, { Component } from 'react';
import { ProductContext } from '../context';

class Featured extends Component {

  static contextType = ProductContext;

  render() {
    const {featuredCourses: courses} = this.context;
    console.log('featured courses', courses);
    
   
    
    return (
      <div>
        hello from featured  
      </div>
    );
  }
}

export default Featured;