import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PATHS from './routes/paths';
import Login from './components/login/Login';
import ForgotPassword from './components/login/ForgotPassword';
import ResetPassword from './components/login/ResetPassword';
import VerifyCode from './components/login/VerifyCode';
import Signup from './components/signup/Signup';
import Welcome from './components/Welcome';
import Customer from './components/Customer';
import Student from './components/student/Student';

function App() {
  return (
    <Router>
      <Routes>
        {/* Welcome */}
        <Route path={`/${PATHS.welcome}`} element={<Welcome />} />

        {/* Login */}
        <Route path={`/${PATHS.login}`} element={<Login />} />
        <Route path={`/${PATHS.forgetpassword}`} element={<ForgotPassword />} />
        <Route path={`/${PATHS.ResetPassword}`} element={<ResetPassword />} />
        <Route path={`/${PATHS.verifycode}`} element={<VerifyCode />} />
        
        {/* Sign up */}
        <Route path={`/${PATHS.register}`} element={<Signup />} />

        {/* Customer */}
        <Route path={`/${PATHS.customer}`} element={<Customer />} />
        
        {/* Student */}
        <Route path={`/${PATHS.student}`} element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
