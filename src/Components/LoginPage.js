import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      alert('Log in Successful!');
      navigate('/');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const containerStyle = {
    minHeight: 'calc(100vh - 150px)', // Adjust based on your navbar height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    marginTop: '20px',
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
          <h2 className="text-center">Login</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ margin: '20px 0' }}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginBottom: '20px' }}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
