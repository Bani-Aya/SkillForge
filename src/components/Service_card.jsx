import PropTypes from 'prop-types';

export const Service_card = ({ service }) => {
  return (
    <div className="card d-flex align-items-center justify-content-center" style={{ width: '18rem', height: '19rem', border: '1px solid #979797', borderRadius: '20px' }}>
      <img src={service.img} className="card-img-top mt-5" alt={service.title} style={{ width: '60px', height: '60px' }} />
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <h5 className="card-title fs-6" style={{ color: '#913880' }}>{service.title}</h5>
        <p className="card-text">{service.description}</p>
      </div>
    </div>
  );
};

Service_card.propTypes = {
  service: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service_card;
