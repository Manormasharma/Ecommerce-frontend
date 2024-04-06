import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div className='product-detail py-8 container'>
      <div className='row'>
        <Breadcrumb product={product} ></Breadcrumb>
        <ProductDisplay product={product} />
      </div>
    </div>
  )
}

export default Product