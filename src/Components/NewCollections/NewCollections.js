import React from 'react'
import new_collection from './../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='section new-collection my-5'>
        <h1>New collection</h1>
        <hr/>
        <div className='section-item'>
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
  )
}

export default NewCollections