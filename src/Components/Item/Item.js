import React from 'react'
import { Link } from 'react-router-dom'
import heart_icon from './../Assets/heart.png'
const Item = (props) => {
  return (
    <div className='col-6 col-md-4 col-lg-3 mb-4 section-item '>
      <Link to={`/product/${props.id}`}>
        <div className='item'>
            <img src={props.image} className='rounded'/>
            <div className='item_details px-1'>
              <p>{props.name}</p>
              <div className='item-price d-flex'>
                  <div className='item-price-new'>&#8377;{props.new_price}</div>
                  <div className='item-price-old'>&#8377;{props.old_price}</div>
              </div>
            </div>
        </div>
      </Link>
      <div class="flex my-3">
          <button class="w-full bg-[#b90000] mr-4 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
          <img src={heart_icon} className='h-8'/>
      </div>
    </div>
  )
}

export default Item