import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Nav = () => {
  return (
    <>
     
      <nav className="navbar navbar-expand-lg" style={{ width: '100%', backgroundColor: 'white', position: 'fixed', top: 0, zIndex: 1000 }}>
        <div className="container">
          <a className="navbar-brand d-flex" href="#" style={{ color: "#913880" }}>
            <img src={logo} alt="logo" width="40" height="30" />
            SkillForge
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" exact>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/student">My learnings</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About us</NavLink>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <div className="input-group">
              <span className="input-group-text" style={{ borderRadius: '22px 0 0 22px', backgroundColor: 'white' ,color:'#959BA5' }}>
                <i className="fas fa-search" ></i>
              </span>
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                style={{ borderRadius: '0 22px 22px 0', borderLeft: 'none' ,color:'#959BA5' }} // Rounded only on the right side
              />
            </div>
          </form>
        </div>
      </nav>
      <style>
        {`
          .nav-link.active {
            color: #913880 !important;
            text-decoration: underline !important;
            text-underline-offset: 8px;
            font-weight: bold !important;
          }
        `}
      </style>
    </>
  );
};
