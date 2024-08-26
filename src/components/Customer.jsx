import { useState } from 'react';
import CustomerCard from './CustomerCard';

const customers = [
  { name: 'John Doe', rating: 4.5, description: 'Great service! Highly recommended.' },
  { name: 'Jane Smith', rating: 5, description: 'Absolutely wonderful experience.' },
  { name: 'Michael Brown', rating: 3.5, description: 'Good service, but there is room for improvement.' },
  { name: 'Alice Johnson', rating: 4, description: 'Very satisfied with the service.' },
  { name: 'Bob Lee', rating: 5, description: 'Exceptional service! Will return.' },
  { name: 'Carol White', rating: 4.2, description: 'A solid experience overall.' },
];

const CustomerList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{ width: '100vw', minHeight: '100vh', marginTop: '-10rem' }}>
      <h2 className="text-center fs-1 fw-bold" style={{ color: '#D22F72' }}>Customer Reviews</h2>
      <div className="customer-list-container">
        <div className="slider">
          <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {customers.map((customer, index) => (
              <div key={index} className="col-md-4 d-flex align-items-stretch justify-content-center">
                <CustomerCard
                  name={customer.name}
                  rating={customer.rating}
                  description={customer.description}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="dots-container">
          {customers.length > 3 && customers.map((_, index) => (
            <span
              key={index}
              className={`dot ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index * 3)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .customer-list-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: rgba(92, 34, 98, 0.1);
          padding: 20px;
        }

        .slider {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .slider-inner {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .slider-inner > div {
          flex: 1 0 33.33%; 
          box-sizing: border-box;
          padding: 0 10px; 
        }

        .dots-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        .dot {
          height: 10px;
          width: 10px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
        }

        .dot.active {
          background-color: #D22F72;
        }
      `}</style>
    </div>
  );
};

export default CustomerList;
