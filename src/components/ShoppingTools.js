import React from 'react'

const ShoppingTools = () => {
  return (
    <div>
        <div className='text-4xl font-bold mb-8 ml-20 mt-24'>Shopping Tools</div>
      <div className="mb-12 mx-20 flex">
        <div className="relative cursor-pointer">
            <img className='w-[540px] h-[260px] object-cover' src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-compare/normal/4365f64f-2c10-11e7-9f74-0019999cd470;sO;twebp/porsche-normal.webp" alt="" />
            <div className="absolute text-xl font-bold text-white px-4 bottom-6 hover:text-red-700"><span className='text-red-700'>&#707; </span>Compare</div>
        </div>
        <div className="relative cursor-pointer">
            <img className='w-[300px] h-[260px] object-cover' src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-dealersearch/normal/c365840c-687b-11e7-9717-0019999cd470;sR;twebp/porsche-normal.webp" alt="" />
            <div className="absolute text-xl font-bold text-white px-4 bottom-6 hover:text-red-700"><span className='text-red-700'>&#707; </span>Locate a dealer</div>
        </div>
        <div className="relative cursor-pointer">
            <img className='w-[300px] h-[260px] object-cover' src="https://files.porsche.com/filestore/image/middle-east/none/homepage-teaser-shoppingtools-pds/normal/94ab936b-9704-11e7-b591-0019999cd470;sR;twebp/porsche-normal.webp" alt="" />
            <div className="absolute text-xl font-bold text-white px-4 bottom-6 hover:text-red-700"><span className='text-red-700'>&#707; </span>Porsche Lifestyle</div>
        </div>
        <div className="relative cursor-pointer">
            <img className='w-[300px] h-[260px] object-cover' src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-kontakt/normal/df7cfdaf-9790-11e7-b591-0019999cd470;sR;twebp/porsche-normal.webp" alt="" />
            <div className="absolute text-xl font-bold text-white px-4 bottom-6 hover:text-red-700"><span className='text-red-700'>&#707; </span>Contact Us</div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingTools
