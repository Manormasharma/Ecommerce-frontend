
import React from 'react'
import arrow_icon from "./../Assets/breadcrum_arrow.png"

const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            Home
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <img src={arrow_icon} />
            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Shop</a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <img src={arrow_icon} />
            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{product.category}</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <img src={arrow_icon} />
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{product.name}</span>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb