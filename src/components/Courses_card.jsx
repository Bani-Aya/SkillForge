import PropTypes from 'prop-types';
import { useState } from 'react';

export const Courses_card = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyle = {
    color: isHovered ? '#ffffff' : '#D22F72',
    border: '1px solid #D22F72',
    backgroundColor: isHovered ? '#D22F72' : '#ffffff',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div className="card d-flex align-items-center" style={{ width: '18rem', height: '24rem', border: '1px solid #979797', borderRadius: '20px' }}>
      <img src={course.img} className="card-img-top mt-2" alt={course.title} style={{ width: '14rem', height: '12rem' }} />
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <h5 className="card-title fs-6" style={{ color: '#913880' }}>{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <a 
          href="#" 
          className="btn" 
          style={buttonStyle} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          More
        </a>
      </div>
    </div>
  );
};

Courses_card.propTypes = {
  course: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
