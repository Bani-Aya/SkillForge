import student_home_page from '@/student_home_page.png';

const HeroSection = () => {
  return (
    <div 
      className="d-flex align-items-center justify-content-center vh-100" 
      style={{ 
        backgroundColor: 'rgba(92, 34, 98, 0.37)', 
        borderBottomLeftRadius: '60px', 
        borderBottomRightRadius: '60px',
        overflow: 'hidden' /* Ensures content doesn't overflow the rounded corners */
      }}
    >
      <div className="row w-100 h-100">
        <div 
          className="col-lg-6 d-flex flex-column align-items-start justify-content-center" 
          style={{ paddingLeft: '4rem' }}
        >
          <p className="fs-5">Never stop learning</p>
          <p className="fs-1 fw-bold text-wrap" style={{ color: '#913880' }}>
            Enhance your web development skills with expert-led courses on <br /> [Your Website Name]
          </p>
          <button className="btn" style={{ backgroundColor: "#D22F72", color: 'white' }}>EXPLORE PATH</button>
        </div>
        <div 
          className="col-lg-6 d-flex justify-content-center align-items-center" 
          style={{ height: '100%' }}
        >
          <img 
            src={student_home_page} 
            alt="Student Home Page" 
            className="" 
            style={{ width: '1000px', height: '100%' }} 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
