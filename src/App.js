import logo from './logo.svg';
import './App.css';
import Carousel_test from './components/Carousel_test';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import FlexBox from './components/FlexBox';

function App() {
  return (
    <div>
      <div>
      <Navbar/>
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
  );
}

export default App;
