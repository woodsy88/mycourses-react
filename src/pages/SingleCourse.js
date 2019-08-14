import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import { ProductContext } from "../context";
import StyledHero from "../components/StyledHero";


class SingleCourse extends Component {

  constructor(props){
    super(props)
    // console.log('default props from react-router', this.props);      
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = ProductContext;

  componentDidMount() {
    // console.log(this.props.match.params.slug); // 2.40

  }
  render() {
    const {getCourse} = this.context;
    const course = getCourse(this.state.slug);
    console.log('course from getCourse',course);

    // if course is undefined - a url entered the does not match a slug
    if (!course) {
      return (
      <div className="error">
        <h3>No such course exists...</h3>
        <Link to="/rooms" className="btn btn-primary"> Return to all courses</Link>
      </div>
      )
    }

    const {name, description, free, type, price, length, paid, extras, images, rating} = course;

    // destucutre the array into 1 main image and an array of the rest of the images
    const [mainImg, ...imgArr] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} course`} >
            <Link to="/rooms" className="btn btn-primary">
              Back to all Courses
            </Link>
          </Banner>
        </StyledHero>
      <section className="single-course">
        <div className="single-course-images">
            {imgArr.map((image, index) => {
                return <img key={index} src={image} alt=""/>
              })
            }
        </div>
        <div className="single-course-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>{type}</h6>
            <h6>{length} minutes long</h6>
            <h6>
              rating : {
                rating > 1 ? `${rating} stars` : `${rating} star`
              }
            </h6>
            <h6>{free && "free course" }</h6>
          </article>
        </div>
      </section>
      <section className="course-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {
            extras.map((extra,index) => {
              return <li key={index}>{extra}</li>
            })
          }
        </ul>
      </section>
      </>
      )
  }
}

export default SingleCourse;