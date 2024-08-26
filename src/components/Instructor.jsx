import instructor from '@/instructor.png';
import facebook from '@/facebook.png'
import twiter from '@/twiter.png'
import linkedin from '@/linkedin.png'

const Instructor = () => {
  return (
    <div 
      className="d-flex align-items-center justify-content-center vh-100 mt-5" 
      style={{ 
        backgroundColor: 'rgba(92, 34, 98, 0.1)', 
       
        overflow: 'hidden' 
      }}
    >
      <div className="row w-100 h-100">
      <div 
          className="col-lg-6 d-flex justify-content-center align-items-center" 
          style={{ height: '100%' }}
        >
          <img 
            src={instructor} 
            alt="Student Home Page" 
            className="" 
            style={{ width: '800px', height: '100%' }} 
          />
        </div>
        
        <div 
          className="col-lg-6 d-flex flex-column align-items-start justify-content-center" 
          style={{ paddingLeft: '4rem' }}
        >
          <h2 style={{color:'#913880'}}>About Me</h2>
          <p className='fs-4' style={{color:'#D22F72' , fontSize:'24px'}} >Hi,this is Andrew , </p>
          <p className="fs-4 text-wrap">
          a passionate Web developer with over 10 years of experience in creating dynamic and responsive web applications. I hold a degree in Computer Science from XYZ University and have worked with leading tech companies such as ABC Corp and DEF Inc. 
          </p>
          <div>
            <div className='my-2'>
                <a href=""><img src={facebook} alt=""  /></a>
                <a href="" className='mx-2 ' style={{color:'black'}}>Facebook</a>
            </div>
            <div className='my-2'>
                <a href=""><img src={twiter} alt="" /></a>
                <a href="" className='mx-2' style={{color:'black'}}>Twiter</a>
            </div>
            <div className='my-2'>
                <a href=""><img src={linkedin} alt="" /></a>
                <a href="" className='mx-2' style={{color:'black'}}>Linkedin</a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Instructor;
