import React from 'react';
import Carousel_test from '../components/Carousel_test';
import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';
import FlexBox from '../components/FlexBox';
import '../App.css';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div>
        <Slideshow/>
      </div>
      <div className='container-slider'>
        <Carousel_test/>
      </div>
      <div>
        <FlexBox/>
      </div>
    </div>
  )
}

export default Dashboard