import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/ORGANICA.png'; // Import image files
import image2 from '../assets/fruits.jpg';
import image3 from '../assets/vegetables.jpg';

function Home1() {

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} style={{ margin: '0 300px' }}>
      <Carousel.Item>
      <div style={{ position: 'relative' }}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        style={{ height: '600px',objectFit: 'cover', borderRadius: '20px', margin:'10px 0 10px 0' }}
      />
      {/* <div style={{ position: 'absolute', bottom: '20px', left: '20px', margin: '20px' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <button className="btn btn-primary btn-lg">Shop Now</button>
        </a>
      </div> */}
    </div>

       
        <Carousel.Caption>
          {/* <h3>ORGANICA</h3> */}
          <p style={{ fontSize: '20px', fontWeight: 'bold',marginTop: '-210px',marginRight:'20px' }}>Naturally Fresh, Naturally Yours</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
      <div style={{ position: 'relative' }}>
      <img
        className="d-block w-100"
        src={image2}
        alt="First slide"
        style={{ height: '600px',objectFit: 'cover', borderRadius: '20px', margin:'10px 0 10px 0'  }}
      />
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', margin: '20px' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <button className="btn btn-primary btn-lg">Shop Now</button>
        </a>
      </div>
    </div>
        <Carousel.Caption>
          <h3 style={{ fontSize: '40px', fontWeight: 'bold' }}>FRUITS</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Experience Nature's Sweet Symphony with Our Fresh Fruits</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{ position: 'relative' }}>
      <img
        className="d-block w-100"
        src={image3}
        alt="First slide"
        style={{ height: '600px',objectFit: 'cover', borderRadius: '20px', margin:'10px 0 10px 0'  }}
      />
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', margin: '20px' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <button className="btn btn-primary btn-lg">Shop Now</button>
        </a>
      </div>
    </div>
        <Carousel.Caption>
          <h3 style={{ fontSize: '40px', fontWeight: 'bold' }}>VEGETABLES</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Harvest the Goodness: Farm-Fresh Vegetables Await!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Home1