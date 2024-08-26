import { useState } from 'react';
import { Nav } from './Nav';
import { MyLearnings } from './MyLearnings';
import { CompletedCourses } from './CompletedCourses ';

export const Student = () => {
  const [activeButton, setActiveButton] = useState('in-progress');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <>
      <Nav/>
      <div style={{ width: '100%', marginLeft: '8rem'   }}>
        <h4 style={{ marginTop: '4rem', marginBottom: '4rem' }} className='fw-bolder'>My Learnings</h4>
        <div style={{ marginLeft: '2rem' }}>
          <a href="#">
            <button 
              className='btn' 
              style={{
                color: activeButton === 'in-progress' ? 'white' : '#979797',
                backgroundColor: activeButton === 'in-progress' ? '#979797' : 'transparent',
                border: '1px solid #979797', 
                borderRadius: '28px', 
                width: '140px', 
                height: '38px', 
                marginRight: '2rem'
              }} 
              onClick={() => handleButtonClick('in-progress')}
            >
              In progress
            </button>
          </a>
          <a href="#">
            <button 
              className='btn' 
              style={{
                color: activeButton === 'completed' ? 'white' : '#979797',
                backgroundColor: activeButton === 'completed' ? '#979797' : 'transparent',
                border: '1px solid #979797', 
                borderRadius: '28px', 
                width: '140px', 
                height: '38px'
              }} 
              onClick={() => handleButtonClick('completed')}
            >
              Completed
            </button>
          </a>
        </div>
      </div>
      {activeButton === 'in-progress' ? <MyLearnings /> : <CompletedCourses />}
    </>
  );
};
export default Student;