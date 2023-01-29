import React from 'react'

const LeftSide = () => {
  return (
    <div className=" bg-veryDarkViolet w-[35%] bg-coloredSide bg-no-repeat bg-cover flex items-center">
          <div className="relative top-0 bottom-0 left-[20%] right-0 flex flex-col items-center">
           <div className="drop-shadow-2xl bg-frontCard bg-no-repeat bg-cover w-[447px] h-[245px] py-8 px-8 flex flex-col justify-between">
            <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
            <div className="text-white">
                <div className="text-[28px]">00000</div>
                <div className="flex justify-between pt-3">
                  <p className="uppercase text-[14px] tracking-widest">jhon doe</p>
                  <div className="uppercase text-[14px] tracking-widest">00/00</div>
                </div>
            </div>
           </div>
            <div className="drop-shadow-2xl bg-backCard bg-no-repeat bg-cover w-[447px] h-[245px] mt-8 ml-40">
                <div className='text-white relative top-[110px] left-[355px] text-[14px] tracking-widest'>000</div>
            </div>
          </div>

    </div>
  )
}

export default LeftSide