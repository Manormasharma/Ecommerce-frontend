
import React from 'react'
import arrow_icon from "./../Assets/arrow.png"

const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className='breadcrumb'>Home <img src={arrow_icon}/> Shop <img src={arrow_icon}/> {product.category}<img src={arrow_icon}/>{product.name} </div>
  )
}

export default Breadcrumb