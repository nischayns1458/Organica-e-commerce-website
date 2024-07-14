import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RegisterPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        name,
        email,
        password,
        phoneNumber,
        role
      });
      alert(response.data.message);
      navigate('/');
    } catch (error) {
      alert('Failed to register user');
    }
  };

  const containerStyle = {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const formStyle = {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    backgroundColor: '#fff',
  };

  return (
    <div style={containerStyle}>
      <Container>
        <div style={formStyle}>
          <h2>Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ margin: '20px 0' }} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '20px' }} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '20px' }} />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ marginBottom: '20px' }} />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Control type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ marginBottom: '20px' }} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Register
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
