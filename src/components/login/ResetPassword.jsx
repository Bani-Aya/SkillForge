import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import student from '@/student_curly_hair.png';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordsMatch(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    checkPasswordsMatch(password, e.target.value);
  };

  const checkPasswordsMatch = (password, confirmPassword) => {
    setPasswordsMatch(password === confirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordsMatch) {
      console.log("Password reset successful");
      // Add your password reset logic here
    }
  };

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

  const buttonStyle = password !== "" && confirmPassword !== "" && passwordsMatch ? {
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
          <div style={{ position: 'absolute', top: '2rem', width: '100%', textAlign: 'center' }}>
            <h2 style={{ color: '#913880' }} className='fw-bold'>Reset Your Password</h2>
            <p className='fw-medium' style={{ color: '#989898' , fontSize:'16px' }}>Create a new password. Ensure it differs from previous ones for security</p>
          </div>
          <div style={{ paddingTop: '4rem', width: '100%' }}>
            <label className='fw-medium' htmlFor="password" style={{ color: '#913880' }}>New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              className="form-control"
              placeholder='Enter your new password'
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              onChange={handlePasswordChange}
            />
            <label className='fw-medium' htmlFor="confirmPassword" style={{ color: '#913880' }}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              className="form-control"
              placeholder='Re-enter password'
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
              onChange={handleConfirmPasswordChange}
            />
            {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
          </div>
          <button
            type="submit"
            className="btn"
            style={buttonStyle}
          >
            Reset Password
          </button>
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

export default ResetPassword;
