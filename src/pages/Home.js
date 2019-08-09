import React, { Component } from 'react';
import Courses from "../components/Courses";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import Featured from '../components/Featured';

class Home extends Component {
  render() {
    return (
      <>
        <Hero>
          <Banner title="Dev Course Review" subtitle="Reviews on Dev Courses" icon="far fa-mountain fa-3x icon-grey">
            {/* children */}
            <Link to='/courses' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">See Courses</Link>
          </Banner>
        </Hero>
        <Services />
        <Featured />
        <Courses />
       
      </>
    );
  }
}

export default Home;