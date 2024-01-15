import React from 'react';
import '../styles/Welcome.css'
import Navbar from './Navbar';
import Main from './views/Main'
import Men from './views/Men';
import Women from './views/Women';
import Newarrivals from './views/Newarrivals'
import Footer from './views/Footer'
import Others from './views/Others';
function Welcome() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Main/></div>
        <div><Men/></div>
        <div><Women/></div>
        <div><Others/></div>
        <div><Newarrivals/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Welcome;