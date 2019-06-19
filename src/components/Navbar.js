import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';


class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
      <header className="flex justify-between items-center bg-gray-900 px-4 py-3">
          <div> 
            <Link to="/" className="nav-link"><Logo /></Link>
          </div>
          <div className="flex">
            <button>
              <i class="h-6 w-6 fill-current text-gray-500 fas fa-bars"></i>
            </button>
          </div>
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

