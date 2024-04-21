import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  
  return (
    <>
    <div style={{ backgroundColor: '#F5F5F5' }}>
    <Navbar />
    {/* this is a carousel below!! */}
    <Footer />
    </div>
    </>
  );
}

export default App;