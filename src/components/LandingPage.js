import React from 'react';
import image from '../assets/main.png'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
    
    <div className="box">
        <div className="linevertical"></div>
        <div className="main">
            <div className="horizontaline"></div>
            <div className="box1">
                <h1 className="landh1">webshocker</h1>
                <h3 className="landh3">chess set</h3>
                <button className='btn'>
                  <Link to='/checkout' className='a'>
                    Buy Now
                  </Link>
                </button>
            </div>
            <div className="horizontaline"></div>
        </div>
        <div className="linevertical"></div>
    </div>
    <div className="boxx">
    <img src={image} alt="" className='img'/>
    </div>
    </>
  )
}

export default LandingPage