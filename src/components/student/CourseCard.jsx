import PropTypes from 'prop-types';

const CourseCard = (props) => {
  return (
    <div className='card mb-3' style={{ display: 'grid', gridTemplateColumns: '9fr 3fr', gap: '20px', border: '1px solid #ddd', borderRadius: '0px', padding: '20px', width: '1200px', height: 'auto', margin: 'auto'  }}>
      <div className='d-flex'>
        <div>
          <img src={props.img} alt="Course" style={{ borderRadius: '8px', maxWidth: '140px' }} />
        </div>
        <div style={{ padding: '20px', flex: 1 }}>
          <p className='fw-bolder fs-6' style={{ color: '#913880' }}>{props.title}</p>
          <p className='fw-medium fs-6'>{props.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="progress" style={{ height: '9px', maxWidth: '86%', borderRadius: '10px', flex: 1 }}>
              <div 
                className="progress-bar" 
                role="progressbar"   
                style={{ width: `${props.progress}%`, backgroundColor: '#913880' }} 
                aria-valuenow={props.progress} 
                aria-valuemin="0" 
                aria-valuemax="100">
              </div>
            </div>
            <p className="mb-0" style={{ color: "#913880", position: 'absolute', right: '5.5rem', top: '100%' }}>{props.progress}%</p>
          </div>
        </div>
        <div style={{ borderRight: '2px solid #ddd', paddingRight: '20px' }}></div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a href={props.link}>
          <button className="btn fw-medium fs-6" style={{ backgroundColor: '#913880', color: 'white', width: '172px', height: '51px', borderRadius: '9px' }}>Go To Course</button>
        </a>
      </div>
    </div>
  );
};

// PropTypes validation
CourseCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default CourseCard;
