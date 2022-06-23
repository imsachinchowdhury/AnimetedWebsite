import React from 'react';
import { Routes ,Route,Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
// import Menu from './Menu';


const App = ()=>{
  return(
    <>
      <Navbar/>
      {/* <Menu/> */}
        <Routes>   
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/service" element={<Service/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            {/* <Redirect to="/" /> */}
        </Routes>
    </>
  )
}
export default App;