import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../assets/ORGANICA.png';

function AboutUs() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 100px)', // Adjust the value based on your footer height
        padding: '0 20px',
         // Adjust horizontal padding as needed
      }}
    >
      <div
        style={{
          maxWidth: '50rem',
          margin: 'auto', // Center the card horizontally
          marginTop: '20px', // Add margin top
          marginBottom: '20px',
           // Add margin bottom
        }}
      >
        <Card style={{ background: '#343a40', color: '#ffffff' }}>
          <Card.Img
            variant="top"
            src={image1}
            style={{
              maxHeight: '30vh', // Adjusted maxHeight
              objectFit: 'cover',
              objectPosition: 'center', // Crop from the center of the photo
            }}
          />
          <Card.Body>
            <Card.Title>About Organica</Card.Title>
            <Card.Text>
              Welcome to Organica - your destination for all things organic! We believe in the power of nature and strive to bring you the freshest, most sustainable products straight from the source. Our journey began with a simple mission: to promote health and well-being through organic living. From farm-fresh produce to eco-friendly household essentials, we curate a wide range of products that are not only good for you but also for the planet. At Organica, we prioritize transparency and quality. We work closely with local farmers and artisans who share our commitment to sustainability, ensuring that every product you receive meets the highest standards of purity and freshness. Whether you're passionate about organic living or just starting your journey, we're here to support you every step of the way. Join us in embracing a healthier, more sustainable lifestyle with Organica!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AboutUs;
