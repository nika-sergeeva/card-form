import React from 'react'

const LeftSide = () => {
  return (
    <div className="bg-veryDarkViolet lg:w-[35%] w-full lg:h-auto h-[30%] bg-coloredSide bg-no-repeat bg-cover flex items-center justify-center">
          <div className="relative flex lg:flex-col flex-col-reverse items-center justify-center">
           
           {/* main side */}
           <div className={`lg:static absolute top-4
           rounded-[9px] xs:mr-10 mr-5
           drop-shadow-2xl bg-center bg-frontCard lg:z-0 z-10
           bg-no-repeat bg-cover lg:py-8 py-3 lg:px-8 px-3
           lg:w-[447px] w-auto lg:h-[245px] h-auto
           max-w-[447px] min-w-[290px] max-h-[245px] min-h-[140px]
           flex flex-col justify-between`}>
              {/* logo */}
            <div className='bg-logo bg-center bg-cover bg-no-repeat lg:w-[84px] w-[40px] lg:h-[47px] h-[22px]'></div>
            
            <div className="text-white">
                <div className="lg:text-[25px] text-[18px]">0000 0000 0000 0000</div>
                <div className="flex justify-between pt-3">
                  <p className="uppercase lg:text-[14px] text-[10px] tracking-widest">Jane Appleseed</p>
                  <div className="uppercase lg:text-[14px] text-[12px] tracking-widest">00/00</div>
                </div>
            </div>
            
           </div>

           {/* cvc */}
            <div className={`lg:static absolute
            rounded-[9px]
            drop-shadow-2xl bg-backCard bg-no-repeat bg-cover 
            lg:w-[447px] w-auto lg:h-[245px] h-auto
            max-w-[447px] min-w-[290px] max-h-[245px] min-h-[140px] 
            lg:mt-8 mt-0 ss:ml-40 xs:ml-10 ml-5 bg-center`}>
              <div className='relative'>
              <div className='text-white absolute lg:top-[110px] top-[60px] lg:left-[355px] left-[230px] lg:text-[14px] text-[12px] tracking-widest'>000</div>

              </div>
            </div>
          </div>

    </div>
  )
}

export default LeftSide

// py-8 px-8 width="24" height="47"