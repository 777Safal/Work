import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import Topimg from './Components/Home/Topimg';
import Welcome from './Components/Home/Welcome';
import Aboutus from './Components/About/Aboutus';
import Ask from './Components/Asked/Ask';
import GalleryPhoto from './Components/Gallery/GalleryPhoto';
import DoggerBlog from './Components/Dogger/DoggerBlog';
import OurServices from './Components/Service/OurServices';
import Footer from './Components/Footer/Footer';
import OurTrainers from './Components/Trainer/OurTrainers';
import Contact from './Components/Contact/Contact';
import Pricing from './Components/Pricing/Pricing';
import Happy from './Components/Happy/Happy';
import Project1 from './Project1';
import Test1 from './Test1';
import Practice from './Components/Practice';



function App() {
  return (
    <div className='w-full relative'>
      <Navbar/>
      <Topimg/>
      <Welcome/>
      <Aboutus/>
      <OurTrainers/>
      <Pricing/>
      <Ask/>
      <Happy/>
      <GalleryPhoto/>
      <DoggerBlog/>
      <OurServices/>
      <Contact/>
      <Footer/>
      
      {/* <Project1/> */}
      {/* <Test1/> */}
      {/* <Practice/> */}
    </div>
  );
}

export default App;
