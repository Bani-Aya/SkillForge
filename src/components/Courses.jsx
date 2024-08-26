import { Courses_card } from './Courses_card'
import { courses } from '../data';

const Courses = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{ width: '100vw', minHeight: '100vh' }}>
      <h2 className="fs-1 fw-bold" style={{ color: '#D22F72' }}>Courses I Offer</h2>
      <p className="fs-5 text-center">I offer a variety of courses designed to help you master frontend development.</p>
      <div className="d-flex align-items-center justify-content-center" style={{ width: '100%', backgroundColor: 'rgba(92, 34, 98, 0.1)', padding: '20px' }}>
        <div className="row justify-content-center" style={{ width: '90%', maxWidth: '1200px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '16px' }}>
          {courses.map((course, index) => (
            <Courses_card course={course} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses; // Default export
