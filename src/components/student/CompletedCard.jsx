import PropTypes from 'prop-types';

export const CompletedCard = (props) => {
  return (
    <div className='card mb-3' style={{ display: 'grid', gridTemplateColumns: '9fr 3fr', gap: '20px', border: '1px solid #ddd', borderRadius: '0px', padding: '20px', width: '1200px', height: 'auto', margin: 'auto' }}>
      <div className='d-flex'>
        <div>
          <img src={props.img} alt="Course" style={{ borderRadius: '8px', maxWidth: '140px' }} />
        </div>
        <div style={{ padding: '20px', flex: 1 }}>
          <p className='fw-bolder fs-6' style={{ color: '#913880' }}>{props.title}</p>
          <div className="d-flex align-items-center mb-3">
            <i className="fas fa-check-circle" style={{ color: '#28a745', fontSize: '24px', marginRight: '10px' }}></i>
            <span className='fw-regular fs-6' style={{ color: '#959BA5' }}>Great Work! You have passed all requirements and can view your course certificate now.</span>
          </div>
        </div>
        <div style={{ borderRight: '2px solid #ddd', paddingRight: '20px' }}></div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a href={props.link}>
          <button className="btn fw-medium fs-6" style={{ backgroundColor: 'white', color: '#913880', width: '172px', height: '51px', borderRadius: '9px', border: '1px solid #913880' }}>Rate</button>
        </a>
      </div>
    </div>
  );
};

// PropTypes validation
CompletedCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CompletedCard;
