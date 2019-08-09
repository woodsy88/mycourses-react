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
    loading: true
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
    })

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

  handleDetail = () => {
    console.log('hello from detail');
  }

  render() {
    return (
      <ProductContext.Provider value={{
            ...this.state, 
            handleDetail: this.handleDetail
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};