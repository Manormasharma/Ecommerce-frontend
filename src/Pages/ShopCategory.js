import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from './../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <div className='container section new-collection my-5'>
            <div className='row'>
                <div className='col-12'>
                <h1><span className='custom'>{props.category}</span> collection</h1>
                </div>
            </div>
            <div className='row py-5'>
                {all_product.map((item,i)=>{
                        if(props.category === item.category){
                            return(
                                <Item  
                                    image = {item.image}
                                    key={i} id={item.id}
                                    name={item.name}
                                    new_price={item.new_price}
                                    old_price={item.old_price} 
                                />
                            )
                        }else{
                            return null;
                        }
                    })}
            </div>
        </div>
        <div className='shop-category-products'>
            
        </div>
    </div>
  )
}


export default ShopCategory