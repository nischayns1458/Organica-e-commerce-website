import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    role: 'customer', // Default role is 'customer'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      alert(response.data.message);
      navigate('/');
    } catch (error) {
      setError('Failed to register user');
    }
  };

  const containerStyle = {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
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
          <h2 className="text-center">Register</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                style={{ margin: '10px 0' }}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="radio"
                label="Customer"
                name="role"
                value="customer"
                checked={formData.role === 'customer'}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Admin"
                name="role"
                value="admin"
                checked={formData.role === 'admin'}
                onChange={handleChange}
              />
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
