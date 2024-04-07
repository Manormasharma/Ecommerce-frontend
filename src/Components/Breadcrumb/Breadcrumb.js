
import React, { useState } from 'react'
import arrow_icon from "./../Assets/breadcrum_arrow.png"
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  const [ Menu, setMenu] = useState("shop")
  const {product} = props;
  return (
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li>
          <div class="flex items-center">
            <Link class="text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:hover:text-white" to='/'>Shop</Link>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <img src={arrow_icon} />
            <Link class="ms-2 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:hover:text-white" to={`/${product.category}`}>{product.category}</Link>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <img src={arrow_icon} />
            <span class="ms-2 text-sm font-medium text-gray-500 md:ms-2">{product.name}</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb