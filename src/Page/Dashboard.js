import React from 'react';
import Carousel_test from '../components/Carousel_test';
import Slideshow from '../components/Slideshow';
import FlexBox from '../components/FlexBox';
import '../App.css';
import BurgerBar from '../components/BurgerBar';
import Navbar from '../components/Navbar';


function Dashboard() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div >
        <div >
          <Slideshow/>
        </div>
        <div>
          <Carousel_test/>
        </div>
        <div>
          <FlexBox/>
        </div>
      </div>
    
    </div>
  )
}

export default Dashboard