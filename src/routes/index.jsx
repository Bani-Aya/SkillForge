import PATHS from "./routes/paths";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
import VerifyCode from "./components/Login/VerifyCode";
import Signup from "./components/SignUp/Signup";
import { Welcome } from "./components/Welcome";
import Customer from "./components/Customer";
import { Student } from "./components/Student/Student";

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
        {/* custumer */}
        <Route path={`/${PATHS.customer}`} element={<Customer />} />
        {/* student */}
        <Route path={`/${PATHS.student}`} element={<Student />} />
      </Routes>
    </Router>