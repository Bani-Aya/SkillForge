import 'bootstrap/dist/css/bootstrap.min.css';
import student from '@/student_curly_hair.png'; 

const ForgotPassword = () => {
  const inputStyle = {
   border: '1px solid #E1E1E1',
    borderRadius: '12px',
    boxShadow: 'none',
    backgroundColor: 'white',
    padding: '0.375rem',
    height: '3rem',
    width: '100%',
    textAlign: 'left',
    marginBottom: '1rem'
  };

  const inputFocusStyle = {
    borderColor: '#913880', 
    boxShadow: 'none',
    outline: 'none'
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: 'rgba(92, 34, 98, 0.37)', width: '100vw', height: '100vh' }}>
      <form className="row w-100 mx-3 mx-lg-5" style={{ backgroundColor: 'white', borderRadius: '24px', maxWidth: '800px', margin: 'auto', position: 'relative' }}>
        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center p-4" style={{ position: 'relative' }}>
          <h2 style={{ color: '#913880', position: 'absolute', top: '4rem', width: '100%', textAlign: 'center' }} className='fw-bold'>Forgot Your Password?</h2>
          <div className="mb-1 w-100" style={{ paddingTop: '4rem' }}> 
            <label htmlFor="inputEmail" className="form-label fw-medium" style={{ color: '#913880' }}>Email or Phone Number</label>
            <input 
              type="email" 
              className="form-control" 
              id="inputEmail" 
              placeholder="Enter your email" 
              style={inputStyle} 
              onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
              onBlur={(e) => e.target.style = inputStyle}
            />
          </div>
         
          <a href="/verifycode" style={{width:'100%'}} >
          <button 
            type="submit" 
            className="btn" 
            style={{ 
              borderRadius:'12px',
              backgroundColor: '#913880', 
              color: 'white', 
              width: '100%', 
              maxWidth: '100%' 
            }}
          >
            Send
          </button>
          </a>
        </div>

        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img src={student} alt="Student" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px' }} />
        </div>
      </form>
      <style>
        {`
          .form-control::placeholder {
            color: #D9D9D9;
            font-size: 0.875rem; /* Change this to your desired size */
          }
        `}
      </style>
    </div>
  );
};

export default ForgotPassword;
