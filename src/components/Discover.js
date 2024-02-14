import React from 'react'

const Discover = () => {
  return (
    <div>
      <div>
        <div className='text-4xl font-bold mb-8 ml-20 mt-24'>Discover</div>
      <div className="mb-12 mx-20 flex">
        <div className="relative cursor-pointer">
            <img className='w-[330px] h-[230px] object-cover' src="https://files.porsche.com/filestore/image/multimedia/none/rd-2018-homepage-teaser-ww-e-performance-kw12/normal/f7cc8e7c-6599-11e9-80c4-005056bbdc38;sM;twebp/porsche-normal.webp" alt="" />
            <div className=" px-1 bottom-6 hover:text-red-700"><span className='text-red-700'>&#707; </span>Porsche E-Performance.</div>
        </div>
        <div className="relative cursor-pointer">
            <img className='w-[330px] h-[230px] object-cover' src="https://files.porsche.com/filestore/image/multimedia/none/rd-2019-homepage-teaser-pof-porschefinder-kw45/normal/f26ec9e6-fb09-11e9-80c6-005056bbdc38;sM;twebp/porsche-normal.webp" alt="" />
            <div className=" px-1 bottom-6 hover:text-red-700"><span className='text-red-700'>&#707; </span>Porsche Finder.</div>
        </div>
        <div className="relative cursor-pointer">
            <img className='w-[330px] h-[230px] object-cover' src="https://files.porsche.com/filestore/image/multimedia/none/rd-2022-homepage-teaser-ww-pds-porschelifestyle-kw22/normal/585df047-db34-11ec-80ef-005056bbdc38;sM;twebp/porsche-normal.webp" alt="" />
            <div className=" px-1 bottom-6 hover:text-red-700"><span className='text-red-700'>&#707; </span>Porsche Lifestyle.</div>
        </div>
        <div className="relative cursor-pointer">
            <img className='w-[330px] h-[230px] object-cover' src="https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-porscheexclusivemanufaktur-kw24/normal/3cbd9b47-4c59-11e7-bfe2-0019999cd470;sM;twebp/porsche-normal.webp" alt="" />
            <div className=" px-1 bottom-6 hover:text-red-700"><span className='text-red-700'>&#707; </span>Porsche Exclusive Manufaktur.</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Discover
