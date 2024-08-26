import logo from '@/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " style={{ width: '100%' , backgroundColor:'rgba(92, 34, 98, 0.37)'  }} >
      <div className="container  ">
        <a className="navbar-brand d-flex" href="#" style={{color:"#913880"}}>
          <img src={logo} alt="logo" width="40" height="30" />
          SkillForge
        </a>
        <div className="ml-auto"> 
          <a href="/login"><button type="button" className="btn mx-2 fw-medium text-uppercase" style={{border:'1px solid white' , color:'#913880' ,backgroundColor:'white',width:'120px' , height:'40px'}}>Log in</button></a>
          <a href="/register"><button type="button" className="btn mx-2 fw-medium text-uppercase" style={{border:'1px solid #913880' , color:'white' ,backgroundColor:'#913880',width:'120px' , height:'40px'}}>Sign up</button></a>
       
        </div>
        
      </div>
      
    </nav>
  );
};

export default Navbar;
