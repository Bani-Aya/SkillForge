import { Completedcourse } from '../../data';
import  CompletedCard from './CompletedCard';

export const CompletedCourses  = () => {
  return (
    <div className="container-fluid d-flex flex-column" style={{ width:'100vw'}}>
    <div className="container-fluid d-flex flex-column align-items-center" style={{ marginTop: '4rem' }}>
      {Completedcourse.map((course, index) => (
        <CompletedCard
          key={index}
          img={course.img}
          title={course.title}
        />
      ))}
    </div>
  
  </div>
  )
}
