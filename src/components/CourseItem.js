import React from "react";

const CourseItem = ({ data }) => (

  <React.Fragment>
    <div className="mt-4">
      <div> 
        <img className="rounded-lg shadow-md h-64" src={data.img}></img>
      </div>
      
      <div className="relative px-4 -mt-16">
        <div className="bg-white rounded-lg px-4 py-3 shadow-lg">
          <div>
            <span className="inline-block leading-none bg-teal-200 text-teal-800 font-semibold rounded-full px-1 uppercase tracking-wide text-xs">{data.level}</span>
            <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
              {data.category.tag} &bull; 2 baths
            </div>
          </div>
            <h4 className="mt-1 text-gray-900 font-semibold text-lg">{data.title}</h4>
            <div className="mt-1">
              <span className="text-gray-900">${data.price}</span>
              <span className="text-gray- 600 text-xs ml-1">{data.currency}</span>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span className="ml-2">34 reviews</span>
            </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default CourseItem;

/*

<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <span className="tag" style={{ background: data.category.color }}></span>
  <img className="w-full" src={data.img} alt={data.title}></img>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{data.title}</div>
    {data.subtext}
    <p className="text-gray-700 text-base">
      {data.text}
    </p>

    {data.link && (
      <a href={data.link.url} target="_blank" rel="noopener noreferrer">
        {data.link.text}
      </a>
    )}


  </div>
  <div className="px-6 py-4">
    {data.tags.map((tag) => {
      return <span>#{tag}</span>
    })}
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{data.category.tag}</span>
  </div>
</div>  

*/

