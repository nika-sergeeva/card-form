import React from 'react'

const MyForm = (props) => {
  return (
    <form className="flex items-center justify-center w-[65%]">
        <div>
            {/* Name */}
            <label for="username" className="uppercase text-[13px]">cardholder name</label>
              <div className="w-[400px] h-[40px] mb-6 border-[1px] border-lightGrayish rounded-[6px] py-2 px-5">
                <input type="text" id="username" className="w-full h-full"/>
              </div>
              {/* Number */}
            <label for="number" className="uppercase text-[13px]">card number</label>
              <div className="w-[400px] h-[40px] border-[1px] mb-6 border-lightGrayish rounded-[6px] py-2 px-5">
                <input type="text" id="number" className="w-full h-full"/>
              </div>
              {/* Exp date */}
            <div className="flex flex-row">
                    <div>
                        <label for="date" className="uppercase text-[13px]">exp. date (mm/yy)</label>
                        <div className="flex">
                        <div className="w-[60px] h-[40px] mr-2 mb-6 border-[1px] border-lightGrayish rounded-[6px] py-2 px-5">
                            <input type="text" id="date" className="w-full h-full"/>
                        </div>
                        <div className="w-[60px] h-[40px] mb-6 border-[1px] border-lightGrayish rounded-[6px] py-2 px-5">
                            <input type="text" id="year" className="w-full h-full"/>
                        </div>
                        </div>
                    </div>
                    <div>
                        <label for="cvc" className="uppercase text-[13px] ml-4">cvc</label>
                        <div className="w-full h-[40px] border-[1px] ml-4 mb-6 border-lightGrayish rounded-[6px] py-2 px-5">
                            <input type="text" id="cvc" className="w-full h-full"/>
                        </div>
                    </div>

            </div>
                    
          <button onClick={() => props.submit()}
          className="w-full h-[55px] bg-veryDarkViolet rounded-[10px] py-2 px-5 text-white">Confirm</button>
        </div>

    </form>
  )
}

export default MyForm