import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';

function ContactUs() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px', // Adjust according to the height of the footer
      backgroundColor: '#343a40',
      width:'500px',
      marginTop:'100px',
      marginBottom:'100px',
      marginLeft:'500px',
      borderRadius:'10px'

       // Dark background color
    }}>
      <Form style={{ width: '400px', margin: '20px' }}> {/* Add margin */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-light">Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="success" style={{margin:'20px 50px 20px 100px',width:'200px'}}>Submit</Button>{' '}
      </Form>
      
    </div>
  );
}

export default ContactUs;
