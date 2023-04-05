import React from 'react'
import image from '../assets/third.jpg'
import { Link } from 'react-router-dom';

const Last = () => {
  return (
    <>
    <div className="lastbox">
        <div className="lastbox1">
            <h3 className="sech3">check the</h3>
            <h1 className="sech1">chessboard</h1>
            <p className="secp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate dolore, totam aut alias necessitatibus nostrum a ducimus deleniti aperiam, vitae temporibus adipisci blanditiis amet omnis culpa, vel doloribus dolor optio velit iste consequuntur cum cumque. Quod aut exercitationem vitae amet maiores! Eum nobis saepe animi optio nihil voluptatum placeat reprehenderit in, cumque exercitationem cum ipsam eos impedit voluptates sed!</p>
            <button className="btn">
              <Link to="/material" className='a'>view materials</Link>
            </button>
        </div>
        <img src={image} alt="" />
    </div>
    </>
  )
}

export default Last