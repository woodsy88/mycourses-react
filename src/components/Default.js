import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from "react-router-dom";

class Default extends Component {
  render() {
    console.log('default props', this.props);

    return (
        <Hero>
        <Banner title='404' subtitle={`page not found for ${this.props.location.pathname}`}>
          <Link className="btn-primary" to="/">Go back to home</Link>

          </Banner>
        </Hero>
    );
  }
}

export default Default;