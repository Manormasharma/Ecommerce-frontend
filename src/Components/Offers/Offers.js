import React from 'react'
import exclusive_offer from "./../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p className='text-upper'>Only on Best sellers Product</p>
            <button>Check Now</button>
        </div>
        <div className='offer-right'>
            <img src={exclusive_offer} />
        </div>
    </div>
  )
}

export default Offers