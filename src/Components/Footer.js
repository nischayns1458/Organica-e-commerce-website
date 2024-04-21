import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter,faFacebook  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
    <footer className="bg-dark text-white text-center p-4">
      <div className="container">
      <div>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3" >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-light">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
        <p style={{marginTop:'20px'}}>&copy; 2024 Organica. All Rights Reserved.</p>
      </div>
    </footer>
</>
  );
}

export default Footer