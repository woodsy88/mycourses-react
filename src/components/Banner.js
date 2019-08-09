import React from 'react';

const Banner = ({children, title, subtitle, icon}) => {
  return (
  
    <div className="banner">
      <i className={icon}></i>
      <h1 className="text-gray-900 text-xl">{title}</h1>
      <div></div>
      <p className="text-grey-600">{subtitle}</p>
      {children}
    </div>
   
  )
};

export default Banner;

