import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../Assets/shop-logo.png'
const Footer = () => {
  return (
    <>
        <footer class="bg-[#720711] shadow w-full">
            <div class="container">
                <div class="row items-center sm:justify-between py-4">
                    <div className='logo col-md-6'>
                        <Link to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Shop</span>
                        </Link>
                    </div>
                    <div className='col-md-6'>
                        <ul class="p-0 flex flex-wrap md:justify-end items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                            <Link to="/" className="text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Shop</Link>
                            <Link to="/mens" className="text-white rounded-md px-3 py-2 text-sm font-medium">Mens</Link>
                            <Link to="/womens" className="text-white rounded-md px-3 py-2 text-sm font-medium">Womens</Link>
                            <Link to="/kids" className="text-white rounded-md px-3 py-2 text-sm font-medium">Kids</Link>
                        </ul>
                    </div>
                    
                </div>
                <hr class="my-6 sm:mx-auto border-white lg:my-8" />
                <span class="block text-sm sm:text-center text-white pb-4">© 2024 Ecommerce Shop by Manorma sharma. All Rights Reserved.</span>
            </div>
        </footer>
    </>
  )
}

export default Footer