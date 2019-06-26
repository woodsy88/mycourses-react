import React, { Component } from 'react';
import { coursesData, detailCourse} from './data';


const ProductContext = React.createContext();
  // provider
  // consumer 


class ProductProvider extends Component {

  state = {
    courses: coursesData,
    detailCourse: detailCourse
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

export {ProductProvider, ProductConsumer};