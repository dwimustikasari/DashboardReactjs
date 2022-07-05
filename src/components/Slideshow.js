import React from 'react';
import "../CSS/Slideshow.css";
import image1 from '../Image/image1.webp';
import image2 from '../Image/image2.webp';
import image3 from '../Image/image3.jpg';
import{Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Slideshow() {
  return (
    <Carousel class="flex-Carousel">
    <Carousel.Item>
      <img src={image1} class="image-content"/>
    </Carousel.Item>
    <Carousel.Item>
      <img src={image2} class="image-content"/>
    </Carousel.Item>
    <Carousel.Item>
      <img src={image3} class="image-content"/>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slideshow