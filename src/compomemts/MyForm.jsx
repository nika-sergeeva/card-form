import React from 'react'

const MyForm = (props) => {
  return (
    <form className="flex items-center justify-center lg:w-[65%] w-auto lg:mt-0 mt-[100px] mx-[5%]">
      
        <div className='lg:max-w-[400px] max-w-full'>
            {/* Name */}
            <label for="username" className="uppercase text-[13px]">cardholder name</label>
              <div className="h-[40px] mb-6 border-[1px] border-lightGrayish rounded-[6px] py-2 px-5">
                <input 
                type="text" 
                id="username"
                placeholder='e.g. Jane Appleseed' 
                className="w-full h-full"/>
              </div>
              {/* Number */}
            <label for="number" className="uppercase text-[13px]">card number</label>
              <div className="h-[40px] border-[1px] mb-6 border-lightGrayish rounded-[6px] py-2 px-5">
                <input 
                type="text" 
                id="number"
                maxLength={16} 
                placeholder="e.g. 1234 5678 9123 0000"
                className="w-full h-full"/>
              </div>
              {/* Exp date */}
            <div className="flex flex-row">
                    <div>
                        <label for="month" className="uppercase text-[13px]">exp. date (mm/yy)</label>
                        <div className="flex">
                        <div className="max-w-[100px] h-[40px] mr-2 mb-6 border-[1px] border-lightGrayish rounded-[6px] py-2 px-5">
                            <input 
                            type="text" 
                            id="month" 
                            maxLength={2} 
                            placeholder="MM"
                            className="w-full h-full"/>
                        </div>
                        <div className="max-w-[100px] h-[40px] mb-6 border-[1px] border-lightGrayish rounded-[6px] py-2 px-5">
                            <input 
                            type="text" 
                            id="year" 
                            maxLength={2} 
                            placeholder="YY"
                            className="w-full h-full"/>
                        </div>
                        </div>
                    </div>
                    <div>
                        <label for="cvc" className="uppercase text-[13px] ml-4">cvc</label>
                        <div className="w-auto h-[40px] border-[1px] ml-4 mb-6 border-lightGrayish rounded-[6px] py-2 px-5">
                            <input 
                            type="text" 
                            id="cvc" 
                            maxLength={3}
                            placeholder="e.g. 123"
                            className="w-full h-full"/>
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