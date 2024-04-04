import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from './../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <div className='banner'>
            <img src={props.banner} />
        </div>
        
        <div className='shop-category-products'>
            {/* <div className='shop-category-indexSort'>
                <p><span>Showing 1-12</span> out of 36 products</p>
                <div className='shop-category-sort'>
                    Sort by <img src={dropdown_icon}/>
                </div>
            </div> */}
            <div className='section new-collection my-5'>
                <h1>{props.category} collection</h1>
                <hr/>
                <div className='section-item'>
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
        </div>
    </div>
  )
}


export default ShopCategory