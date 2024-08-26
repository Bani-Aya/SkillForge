import Navbar from './Navbar';
import HeroSection from './HeroSection';
import OurServices from './OurServices';
import Instructor from './Instructor';
import  Courses  from './Courses';
import  Customer  from './Customer';
import Footer from './Footer';

 const Welcome = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <OurServices/>
        <Instructor/>
        <Courses/>
        <Customer/>
        <Footer/>
    </div>
  )
}
export default Welcome ; 