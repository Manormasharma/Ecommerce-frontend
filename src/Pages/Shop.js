import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import "./../Components/global.scss"
const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <NewCollections/>
    </>
  )
}

export default Shop