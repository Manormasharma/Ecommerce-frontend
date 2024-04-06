import React from 'react'
import data_product from './../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='container section new-collection my-5'>
    <div className='row'>
      <div className='col-12'>
        <h1>New collection</h1>
        <hr/>
      </div>
    </div>
    <div className='row py-5'>
        {new_collection.map((item,i)=>{
            return <Item
            image = {item.image}
            key={i} id={item.id}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
        />
        })}
    </div>
  </div>
    <div className='section popular my-5'>
        <h1>Popular in Women</h1>
        <hr/>
        <div className='section-item'>
            {data_product.map((item,i)=>{
                return <Item
                image = {item.image}
                key={i} id={item.id}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                />
            })}
        </div>
    </div>
  )
}

export default Popular