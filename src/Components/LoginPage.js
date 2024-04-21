import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password match
    if (email === 'sai@example.com' && password === 'sai') {
      // Redirect to LMS page upon successful login
      alert('Log in Successful!');
      navigate('/');
    } else {
      // Handle invalid login
      alert('Invalid email or password');
    }
  };

  const containerStyle = {
    minHeight: 'calc(100vh - 150px)', // Adjust based on your navbar height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'20px 0 20px 550px', // Add margin to the bottom
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
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: '20px 0 20px 0' }} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '20px' }} />
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
