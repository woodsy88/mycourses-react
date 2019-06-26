import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import Logo from './Logo';


class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {(value) => {
             console.log(value);
             
          }}
        </ProductConsumer>
        <header className="bg-gray-900">
          <div className="flex justify-between px-4 py-3">
            <div> 
              <Link to="/" className="nav-link"><Logo /></Link>
            </div>
            <div className="flex">
              <button className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
                <i className="h-6 w-6 fill-current fas fa-bars "></i>
              </button>
            </div>          
        </div>
          <nav>
            <div className="px-2 pt-2 pb-5 border-b border-gray-800">
              <Link to='#' className="font-semibold rounded leading-tight text-white px-3 py-1 block hover:bg-gray-800">List a course</Link>
              <Link to='#' className="mt-2 font-semibold rounded leading-tight text-white px-3 py-1 block hover:bg-gray-800">Courses</Link>
              <Link to='#' className="mt-2 font-semibold rounded leading-tight text-white px-3 py-1 block hover:bg-gray-800">Messages</Link>
            </div>
           <div className="px-5 py-5">
              <div className="flex items-center">
                <img className="h-10 w-10 object-cover rounded-full border-2 border-gray-600" src="https://dl.dropboxusercontent.com/s/pvyzcai2e2i73oc/freestocks-org-209880-unsplash.jpg?dl=0" alt="" />
                <span className="ml-4 font-semibold text-gray-200">User Name</span>
              </div>
              <div className="mt-5">
                <Link to="#" className="block text-gray-400 hover:text-white">Account</Link>
                <Link to="#" className="mt-2 block text-gray-400 hover:text-white">Support</Link>
                <Link to="#" className="mt-2 block text-gray-400 hover:text-white">Sign Out</Link>
              </div>
           </div>
          </nav>          
      </header>


      
      <section className="flex justify-between bg-gray-800 px-4 py-3">    
       <div className="relative">
            <div className="absolute fill-current  inset-y left-0 flex items-center">  
            <i className="h-6 w-6 px-2 py-4 pl-4 fill-current fas fa-search text-gray-500"></i>
          </div>
          <input className="bg-gray-900 focus:outline-none focus:bg-gray-700 focus:text-blue-400 text-white rounded-lg pl-10 pr-4 py-3" type="text" placeholder="search"></input> 
       </div>  
          <button className="bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow  pr-5 pl-3">
            <i className="h-6 w-6 text-gray-500 fas fa-filter"></i>
            <span className=" text-white font-light">filters</span>
          </button>     
      </section>
      </React.Fragment>
    );
  }
}
 
export default Navbar;

