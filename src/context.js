import React, { Component } from 'react';
import { coursesData, detailCourse} from './data';
import items from './data-mock';


const ProductContext = React.createContext();
  // provider
  // consumer '


class ProductProvider extends Component {

  state = {
    courses: [],
    sortedCourses: [],
    featuredCourses: [],
    loading: true,
    type: 'all',
    length: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,

  };

  // get data
  componentDidMount() {
    let courses = this.formatData(items);
    // console.log(courses);
    let featuredCourses = courses.filter(course => course.featured === true);
    this.setState({
      courses,
      featuredCourses,
      sortedCourses: courses,
      loading: false
    });

  }

  // massage the data into more usable format
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let course = {...item.fields, images, id};
      return course;
    });
    return tempItems;
  }

  // gets the specific course from the data for the single Course page
  getCourse = (slug) => {
    let tempCourses = [...this.state.courses];
    const course = tempCourses.find((course) =>  course.slug === slug);
    // console.log(`getCourse fetched ${course}`);
    
    return course;
  }


  render() {
    return (
      <ProductContext.Provider value={{
            ...this.state, 
            getCourse: this.getCourse
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

// 3:45 - 3:47
export function withProductConsumer(Component) {
  return function ConsumerWrapper(props) {
      return <ProductConsumer>
                {value => <Component {...props} context={value} />}
            </ProductConsumer>
  }
}

export {ProductProvider, ProductConsumer, ProductContext};