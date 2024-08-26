
import  CourseCard  from './CourseCard';
import { courses } from '../../data'; 

export const MyLearnings = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center" style={{ width:'100vw'}}>
    <div className="container-fluid d-flex flex-column align-items-center" style={{ marginTop: '4rem' }}>
      {courses.map((course, index) => (
        <CourseCard 
          key={index}
          img={course.img}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
    </div>
  );
}
