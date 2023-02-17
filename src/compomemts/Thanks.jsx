import React from 'react'

const Thanks = (props) => {
  return (
    <div className="flex items-center justify-center lg:w-[65%] w-auto lg:mt-0 mt-[43px] mx-[5%]">
      <div className='flex flex-col items-center justify-center lg:w-[65%] w-auto lg:mt-0 mt-[43px]'>
        <div className='max-w-[500px] flex flex-col items-center justify-between'>
          <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>

            <div className='text-[34px] uppercase mt-6 mb-5 text-veryDarkViolet'>Thank you!</div>
              <div  className='text-darkGrayish'>We've added your card details</div>
              
        </div>
        <button onClick={() => props.submit()} className='max-w-[400px] w-full h-[55px] mt-9 bg-veryDarkViolet rounded-[10px] py-2 px-5 text-white'>Continue</button>
      </div>
    </div>
  )
}

export default Thanks