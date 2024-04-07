import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import logo from './../Assets/shop-logo.png'

const Navbar = () => {
const [activeMobile, setActiveMobile] = useState(false)
const [ Menu, setMenu] = useState("shop")
return (
    <>
        <nav className="bg-[#720711]">
            <div className='container'>
                <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                            <button type="button" onClick={() => setActiveMobile(!activeMobile)}  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center md:items-stretch md:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src={logo} alt="Shop" />
                            </div>
                            <div className="hidden md:ml-6 md:block">
                                <div className="flex space-x-4">
                                    <Link onClick={() => setMenu('shop')} to="/" className="text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Shop</Link>
                                    <Link onClick={() => setMenu('mens')} to="/mens" className="text-white rounded-md px-3 py-2 text-sm font-medium">Mens</Link>
                                    <Link onClick={() => setMenu('womens')} to="/womens" className="text-white rounded-md px-3 py-2 text-sm font-medium">Womens</Link>
                                    <Link onClick={() => setMenu('kids')} to="/kids" className="text-white rounded-md px-3 py-2 text-sm font-medium">Kids</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-[60px] flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                            <div className="relative ml-3">
                                <div className='flex items-center gap-5'>
                                    <Link to="/login" className="text-white px-3 py-2 text-sm font-medium hidden">Login</Link>
                                    
                                    <Link to="/cart">
                                        <div className="flex justify-center items-center">
                                            <div className="relative py-2">
                                                <div className="t-0 absolute left-3">
                                                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" className="file: mt-4 h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden" id="mobile-menu" >
                    {activeMobile && (
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Shop</Link>
                            <Link to="/mens" className="ext-white block rounded-md px-3 py-2 text-base font-medium">Mens</Link>
                            <Link to="/womens" className="ext-white block rounded-md px-3 py-2 text-base font-medium">Womens</Link>
                            <Link to="/kids" className="ext-white block rounded-md px-3 py-2 text-base font-medium">Kids</Link>
                            <Link to="/login" className="text-white px-3 py-2 text-sm font-medium">Login</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar