import React from 'react'
import PropTypes from 'prop-types'

const Models = (props) => {
  return (
    <div>
      <div className="relative ">
        <img className='w-[440px] h-[300px] object-cover' src={props.image} alt="porsche" />
        <div className="absolute top-4 ml-6">
            <span className='text-4xl text-white font-semibold'>{props.name}</span>
        </div>
        <div className="absolute top-12 ml-6 m-2">
            <span className='text-xl text-white font-semibold'>from INR {props.price}</span>
        </div>

        <div className="flex space-x-4 absolute bottom-2 ml-8 mb-3">
            <div className="bg-white px-4 py-2 text-center hover:bg-[#d5001c] hover:text-white">Build Your Own</div>
            <div className="bg-transparent text-white px-4 py-2 text-center border border-white hover:bg-slate-900 hover:text-[#d5001c] hover:border-[#d5001c]">All Models</div>
        </div>

      </div>
    </div>
  )
}

Models.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
}

export default Models
