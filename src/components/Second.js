import React from 'react'
import image from '../assets/second.jpg'

const Second = () => {
  return (
    <>
    <div className='secbox'>
      <h3 className="sech3">check the</h3>
      <div className="secbox1">
        <div className="secline"></div>
        <h1 className="sech1">figures</h1>
        <div className="secline"></div>
      </div>
    </div>
    <p className="secp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius, et modi fuga odio numquam cupiditate suscipit, recusandae eum ipsa mollitia nam, enim sequi. Id, nesciunt. In praesentium officiis, harum, natus provident iure, saepe ullam inventore voluptas tempore laborum amet.</p>
    <img src={image} alt="" className='secimg'/>
    </>
  )
}

export default Second