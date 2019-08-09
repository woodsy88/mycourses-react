import React from 'react';
import Hero from '../components/Hero';
import Banner from  '../components/Banner';
import {Link} from 'react-router-dom';

const CoursesPage = () => {
  return (
    <>
      <Hero hero="coursesHero">
        <Banner title="courses">
          <Link to="/">Home</Link>
        </Banner>
      </Hero>
    </>
  );
};

export default CoursesPage;