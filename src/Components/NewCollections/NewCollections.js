import React from 'react'
import new_collection from './../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
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
    
  )
}

export default NewCollections