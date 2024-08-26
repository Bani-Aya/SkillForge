import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

const CustomerCard = ({ name, rating, description }) => {
  return (
    <div className="card" style={{ display: 'grid', gridTemplateColumns: '9fr 3fr', gap: '20px', border: '1px solid #913880', borderRadius: '8px', padding: '20px', width: '28rem', height: '16rem', margin: 'auto' ,backgroundColor:'#f4ecf3' }}>

      <div style={{ padding: '20px', flex: 1 }}>
      <StarRatings
          rating={rating}
          starRatedColor="#913880"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="2px"
        />
        <p className='mt-2'>{description}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default CustomerCard;
