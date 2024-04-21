import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar as BootstrapNavbar, FormControl, Button } from 'react-bootstrap'; // Rename Navbar as BootstrapNavbar
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Home1 from './Home1';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

// Import shopping cart icon from React Bootstrap
import { BiCart } from 'react-icons/bi'; // Assuming you're using React Icons library

function Navbar() {
  return (
    <>
    <Router>

    <BootstrapNavbar expand="lg" className="bg-dark text-light" style={{ backgroundColor: 'Purpureus' , height: '90px'}}>
      <Container>
        <BootstrapNavbar.Brand href="/Home1" id='organica_id' className="text-light" style={{fontFamily:'"PT Sans Narrow", sans-serif',fontWeight:'bolder',fontSize:'30px',marginLeft:'-77px'}}>ORGANICA</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home1" className="text-light">
            <Link to="/Home1" style={linkStyle}>Home</Link></Nav.Link>
            <Nav.Link href="/AboutUs" className="text-light"><Link to="/AboutUs" style={linkStyle}>About Us</Link></Nav.Link>
            <Nav.Link href="/ContactUs" className="text-light"><Link to="/ContactUs" style={linkStyle}>Contact Us</Link></Nav.Link>
          </Nav>
          <Nav className="mr-auto align-items-center">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{  height: '40px', width: '250px', marginRight: '8px'}} />
            <Button variant="outline-success" style={{ height: '40px', marginRight: '50px'}}>Search</Button> {/* Added inline style to add spacing */}
            <Button variant="secondary" style={{ height: '40px', marginRight: '20px', fontSize: '16px', padding: '8px 16px', display: 'flex', alignItems: 'center' }}> <Nav.Link href="/RegisterPage" className="text-light">
    <Link to="/RegisterPage" style={linkStyle}>Sign Up</Link>
  </Nav.Link></Button>{' '}
          <Button variant="primary"  style={{
    background: 'Jet',
    width: '100px',
    marginRight: '20px',
    transition: 'background-color 0.3s',
  }}><Link to="/LoginPage" style={linkStyle}>Login</Link></Button>

  {/* Add cart button with built-in icon */}
  <Button variant="info" style={{ height: '40px', marginRight: '-77px' }}>
    <Link to="/shopping-cart" style={{ textDecoration: 'none', color: '#fff' }}>
      <BiCart style={{ marginRight: '5px' }} /> {/* Adjust margin as needed */}
      Cart
    </Link>
  </Button>

          </Nav>
          {/* <Button variant="primary"   style={{
    background: 'Jet',
    width: '100px',
    marginRight: '20px',
    transition: 'background-color 0.3s',
  }}>Sign Up</Button> Added inline style to change background color */}
  {/* Added inline style to change background color */}
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
    <Routes>
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Home1" exact element={<Home1 />} />
          <Route path="/" exact element={<Home1 />} />
    </Routes>
    </Router>
    </>
  )
}

const linkStyle = {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#ffffff', // Default color
  };

export default Navbar;
