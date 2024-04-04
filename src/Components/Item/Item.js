import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className='item'>
          <img src={props.image}/>
          <div className='item_details'>
            <p>{props.name}</p>
            <div className='item-price d-flex'>
                <div className='item-price-new'>&#8377;{props.new_price}</div>
                <div className='item-price-old'>&#8377;{props.old_price}</div>
            </div>
          </div>
      </div>
    </Link>
  )
}

export default Item