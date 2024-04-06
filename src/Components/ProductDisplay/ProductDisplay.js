import React from 'react'

const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div class="py-8">
        <div class="max-w-6xl">
            <div class="flex flex-col md:flex-row">
                <div class=" px-4">
                    <div class="rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img class="w-full h-full object-cover rounded-lg" src={product.image} alt="Product Image"/>
                    </div>
                </div>
                <div class="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                    <p class="text-gray-600  text-sm mb-4">{product.desc}</p>
                    <div class="flex mb-4">
                        <div class="mr-4">
                            <span class="font-bold text-gray-700 ">New Price: </span>
                            <span class="text-gray-600 "> {product.new_price}</span>
                        </div>
                        <div class="mr-4">
                            <span class="font-bold text-gray-700 ">Old Price: </span>
                            <span class="text-gray-600  line-through">{product.old_price}</span>
                        </div>
                        <div>
                            <span class="font-bold text-gray-700 ">Availability:</span>
                            <span class="text-gray-600 "> In Stock</span>
                        </div>
                    </div>
                    <div class="mb-4">
                        <span class="font-bold text-gray-700 ">Select Color:</span>
                        <div class="flex items-center mt-2">
                            <button class="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                            <button class="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                            <button class="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                            <button class="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                        </div>
                    </div>
                    <div class="mb-4">
                        <span class="font-bold text-gray-700 ">Select Size:</span>
                        <div class="flex items-center mt-2">
                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">S</button>
                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">M</button>
                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">L</button>
                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XL</button>
                            <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XXL</button>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <span class="font-bold text-gray-700 ">Product Description:</span>
                        <p class="text-gray-600  text-sm mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                            lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                            ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                            sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                        </p>
                    </div>
                    
                    <div class="flex -mx-2 mb-4">
                        <div class="w-1/2 px-2">
                            <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                        </div>
                        <div class="w-1/2 px-2">
                            <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay