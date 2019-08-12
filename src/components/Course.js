import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

const Course = ({course}) => {
  console.log('course1', course);

  const {name, slug, images, price} = course;
  
  return (
    <React.Fragment>
      <div className="mt-4">
        <div>
          <img className="rounded-lg shadow-md h-64" src={images[0] || defaultImg} alt="" onClick={(e) => console.log(`you clicked me`)
          }/>
        </div>

        <div className="relative px-4 -mt-16">
          <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
            <div>
              <span className="inline-block leading-none bg-teal-200 text-teal-800 font-semibold rounded-full px-1 uppercase tracking-wide text-xs">{name}</span>
              <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                {} &bull; 2 baths
            </div>
            </div>
            <h4 className="mt-1 text-gray-900 font-semibold text-lg">{name}</h4>
            <div className="mt-1">
              <span className="text-gray-900">${price}</span>
              <span className="text-gray- 600 text-xs ml-1">{name}</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <span className="ml-2">34 reviews</span>
            </div>
            <Link to={`/courses/${slug}`}>Details</Link>
            <button className="" >

            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Course.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,

  })
}


export default Course;