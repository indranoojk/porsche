import React from 'react'

const FindPorsche = () => {
  return (
    <div>
      <div className='text-4xl font-bold mb-4 ml-20'>Find a Porsche near you</div>
      <div className='flex mx-20 mb-10'>
        <div className="">
            <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-718/normal/db4be0ec-f8f4-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp" alt="" />
            <div className="bg-slate-800 text-white px-5 py-3 w-fit ml-28">Find 718 Models</div>
        </div>
        <div className="">
            <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-911/normal/e7c2070d-f8f4-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp" alt="" />
            <div className="bg-slate-800 text-white px-5 py-3 w-fit ml-28">Find 911 Models</div>
        </div>
        <div className="">
            <img src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-taycan/normal/253ef544-f8f5-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp" alt="" />
            <div className="bg-slate-800 text-white px-5 py-3 w-fit ml-28">Find Taycan Models</div>
        </div>

        {/* Add the JS for slider and add other car models also */}

      </div>
    </div>
  )
}

export default FindPorsche
