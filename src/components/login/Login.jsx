import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import student from '@/student_curly_hair.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: 'rgba(92, 34, 98, 0.37)', width: '100vw', height: '100vh' }}>
      <form className="row w-100 mx-3 mx-lg-5" style={{ backgroundColor: 'white', borderRadius: '24px', maxWidth: '800px', margin: 'auto' }}>
        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center p-4">
          <h2 style={{ color: '#913880' }} className='fw-bold text-center'>Sign In</h2>
          <div className="mb-3 w-100">
            <label htmlFor="inputEmail" className="form-label fw-medium" style={{ color: '#913880' }}>Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="inputEmail" 
              placeholder="Enter your email" 
              style={inputStyle(email)} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="inputPassword" className="form-label fw-medium" style={{ color: '#913880' }}>Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="inputPassword" 
              placeholder="Enter your password" 
              style={inputStyle(password)} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-end ">
              <a href="/forgetpassword?" style={{ color: '#9C9C9C', fontSize: '12px' }}>Forget Password?</a>
            </p>
          </div>
          <a href="/student"><button type="submit" className="btn" style={{ backgroundColor: '#913880', color: 'white', width: '10rem',borderRadius:'16px' }}> Sign In</button></a>
          <p style={{ color: '#9C9C9C' }} className='m-3'> U have no account?<a href="/register" className= 'text-decoration-underline' style={{ color: '#A12C66' }}> Sign up now</a></p>
        </div>

        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img src={student} alt="Student" style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '8px' }} />
        </div>
      </form>
      <style>
        {`
          .form-control::placeholder {
            color: #D9D9D9;
            font-size: 0.875rem;
          }
        `}
      </style>
    </div>
  );
};

const inputStyle = (value) => ({
  borderTop: 'none',
  borderRight: 'none',
  borderBottom: '2px solid #913880',
  borderLeft: 'none',
  borderRadius: '0',
  boxShadow: 'none',
  backgroundColor: value ? '#f0f0f0' : 'white',
  padding: '0.375rem',
  height: '3rem',
  width: '100%',
  textAlign: 'left',
  marginBottom: '1rem'
});
export default Login;
