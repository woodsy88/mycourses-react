import React from 'react';
import CoursesFilter from './CoursesFilter';
import CourseList from './CourseList';
// import {ProductConsumer} from '../context';
import {withProductConsumer} from '../context';
import Loading from './Loading';

function CourseContainer({context}) {
  const { loading, sortedCourses, courses } = context;

  if (loading) {
    return <Loading/>;
  }

  return (
            <>
              <CoursesFilter courses={courses} />
              <CourseList courses={sortedCourses} />
            </>
          )
}

export default withProductConsumer(CourseContainer);

// const CourseContainer = () => {
//   return (
//     <ProductConsumer>
//       {
//         (value) => {
//           console.log('i consume context but cant change it', value)
//           const { loading, sortedCourses, courses } = value;
//           console.log(loading);
          

//           if(loading) {
//             return <Loading />;
//           }

//           return (
//             <div>
//               Course Container
//               <CoursesFilter courses={courses} />
//               <CourseList courses={sortedCourses} />

//             </div>
//           )
//         }
//       }
//     </ProductConsumer>
//   );
// };

// export default CourseContainer;