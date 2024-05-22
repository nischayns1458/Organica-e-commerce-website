import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', { email, message });
      alert(response.data.message);
      setEmail('');
      setMessage('');
    } catch (error) {
      alert('Failed to submit contact form');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
      backgroundColor: '#343a40',
      width: '500px',
      marginTop: '100px',
      marginBottom: '100px',
      marginLeft: '500px',
      borderRadius: '10px'
    }}>
      <Form style={{ width: '400px', margin: '20px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-light">Message</Form.Label>
          <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
        <Button variant="success" style={{ margin: '20px 50px 20px 100px', width: '200px' }} type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default ContactUs;
