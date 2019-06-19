import React, { Component } from 'react';
import Courses from "./Courses";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="px-4 py-6 text-center">
          <i className="far fa-mountain fa-3x icon-grey"></i>
          <h1 className="text-gray-900 text-xl">Dev Course Review</h1>
          <h2 className="text-grey-600">Reviews on Dev Courses</h2>
        </main>
        <Courses />
       
      </React.Fragment>
    );
  }
}

export default Home;