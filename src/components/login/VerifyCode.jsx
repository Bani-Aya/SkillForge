import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import student from '@/student_curly_hair.png';

const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [allFilled, setAllFilled] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (index < 4) {
        document.getElementById(`input${index + 1}`).focus();
      }
      checkAllFilled(newCode);
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
      checkAllFilled(newCode);
    }
  };

  const checkAllFilled = (newCode) => {
    const filled = newCode.every(digit => digit !== "");
    setAllFilled(filled);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code.join(""));
  };

  const inputStyle = {
    border: '1px solid #913880',
    borderRadius: '12px',
    boxShadow: 'none',
    backgroundColor: 'white',
    padding: '0.375rem',
    width: '3rem',
    height: '3rem',
    textAlign: 'center',
    marginRight: '1rem'
  };

  const inputFocusStyle = {
    borderColor: '#913880',
    boxShadow: 'none',
    outline: 'none',
    width: '3rem',
    height: '3rem'
  };

  const buttonStyle = allFilled ? {
    backgroundColor: '#913880',
    color: 'white',
    width: '100%',
    maxWidth: '100%'
  } : {
    backgroundColor: 'rgba(145, 56, 128, 0.2)',
    color: 'white',
    width: '100%',
    maxWidth: '100%'
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: 'rgba(92, 34, 98, 0.37)', width: '100vw', height: '100vh' }}>
      <form className="row w-100 mx-3 mx-lg-5" style={{ backgroundColor: 'white', borderRadius: '24px', maxWidth: '800px', margin: 'auto', position: 'relative' }} onSubmit={handleSubmit}>
        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center p-4" style={{ position: 'relative' }}>
          <h2 style={{ color: '#913880', position: 'absolute', top: '2rem', width: '100%', textAlign: 'center' }} className='fw-bold'>Verify Your Code</h2>
          <p style={{color:'#1E1E1E'}}>Check your email</p>
          <p style={{color:'#989898'}}>We sent a reset link to <a style={{color:'#545454'}}>contact@dscode...com.</a> Enter the 5-digit code mentioned in the email.</p>
          <div className="mb-3 w-100 d-flex justify-content-center">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="form-control"
                id={`input${index}`}
                value={digit}
                maxLength="1"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
          <div style={{width:'20rem'}}>
          <a href="/Resetpassword"  >
          <button
            type="submit"
            className="btn"
            style={buttonStyle}>
            Verify
          </button></a>
          </div>
          <p>Haven’t got the email yet? <a href="" className='text-decoration-underline' style={{color:'#A12C66'}}>Resend email</a></p>
        </div>

        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img src={student} alt="Student" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px' }} />
        </div>
      </form>
    </div>
  );
};

export default VerifyCode;
