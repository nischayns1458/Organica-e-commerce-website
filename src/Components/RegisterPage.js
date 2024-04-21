import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // For simplicity, assume registration is successful
    // Redirect to LMS page upon successful registration
    alert('Sign Up Successful!');
    navigate('/');
  };

  const containerStyle = {
    minHeight: 'calc(100vh - 80px)', // Adjust based on your navbar height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'0 0 0 550px'
  };

  const formStyle = {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    backgroundColor: '#fff',
    margin:'20px 0 20px 0'
  };

  const inputStyle = {
    
    margin:'20px 0 20px 0'
  };

  return (
    <div style={containerStyle}>
      <Container>
        <div style={formStyle}>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle}  />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Confirm Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Control type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={inputStyle} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:'100%'}}>
              Sign Up
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
