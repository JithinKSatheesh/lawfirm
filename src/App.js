import React from 'react';
import logo from './logo.svg';
import './bootstrap/bootstrap.min.css'
import './App.css';

import Navbar from './Components/Navbar'
import Carousal from './Components/Carousal'
import Chooseus from './Components/WhyChooseus'
import Service from './Components/Service'
import Contactus from './Components/ContactUs'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Carousal/>
        <Chooseus/>
        <Service/>
        <Contactus/>
        <Footer/>

    </div>
  );
}

export default App;
