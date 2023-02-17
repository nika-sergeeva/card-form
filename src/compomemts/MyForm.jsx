import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import Errors from './UI/Errors'

const MyForm = ({formNewCard, submit}) => {

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm({
    mode: "onBlur"
  })

  const onSubmit = (data) => {
    console.log(data)
    submit()
  }

  const [newCard, setNewCard] = useState({
    number: '',
    name: '',
    mm: '',
    yy: '',
    cvc: ''
  })

  useEffect(()=>{
    formNewCard(newCard)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="flex items-center justify-center lg:w-[65%] w-auto lg:mt-0 mt-[100px] mx-[5%]">
      
        <div className='lg:max-w-[400px] max-w-full'>
            {/* Name */}
            <label htmlFor="name" className="uppercase text-[13px]">cardholder name</label>
              <div className={`relative h-[40px] mb-6 border-[1px]  rounded-[6px] py-2 px-5
              ${errors.name?.message? "border-rose-500" : "border-lightGrayish"}`}>   
                <input 
                  {...register("name", {
                    required: "Can't be blank!",
                    pattern:{
                      value: /[A-Za-z]/,
                      message: "Wrong format, letters only"
                    }
                  })}
                  placeholder={"e.g. Jane Appleseed"}
                  value={newCard.name}
                  maxLength={25}
                  className="w-full h-full"
                  onChange={(e) => setNewCard({...newCard, name: e.target.value})}
                  />
                  <Errors message={errors.name?.message} text={errors.name?.message}/>
              </div>
              
              {/* Number */}
            <label htmlFor="number" className="uppercase text-[13px]">card number</label>
              <div className={`relative h-[40px] border-[1px] mb-6 rounded-[6px] py-2 px-5
              ${errors.number?.message? "border-rose-500" : "border-lightGrayish"}`}>
                <input 
                {...register("number", {
                  required: "Can't be blank!",
                  pattern:{
                    value: /^[0-9]+$/,
                    message: "Wrong format, numbers only"
                  },
                  minLength: {
                    value: 16,
                    message: "Can't be less than 16 numbers!"
                  },
                })}
                value={newCard.number}
                onChange={(e) => setNewCard({...newCard, number: e.target.value})}
                maxLength={16} 
                placeholder="e.g. 1234 5678 9123 0000"
                className="w-full h-full"/>
                <Errors message={errors.number?.message} text={errors.number?.message}/>
              </div>
              {/* Exp date */}
            <div className="flex flex-row">
                    <div>
                        <label htmlFor="mm" className="uppercase text-[13px]">exp. date (mm/yy)</label>
                        <div className="flex">
                        <div className={`relative max-w-[100px] h-[40px] mr-2 mb-6 border-[1px] 
                        border-lightGrayish rounded-[6px] py-2 px-5
                        ${errors.mm?.message? "border-rose-500" : "border-lightGrayish"}`}>
                            <input 
                            {...register("mm", {
                              required: "Can't be blank!",
                              pattern:{
                                value: /^[0-9]+$/,
                                message: "Wrong format, numbers only"
                              },
                              max:{
                                value: 12,
                                message: "Error!"
                              }
                            })}
                            value={newCard.mm}
                            onChange={(e) => setNewCard({...newCard, mm: e.target.value})}
                            maxLength={2} 
                            placeholder="MM"
                            className="w-full h-full"/>
                            <Errors message={errors.mm?.message} text={errors.mm?.message}/>
                        </div>
                        <div className={`relative max-w-[100px] h-[40px] mb-6 border-[1px] border-lightGrayish rounded-[6px] py-2 px-5
                        ${errors.yy?.message? "border-rose-500" : "border-lightGrayish"}`}>
                            <input 
                            {...register("yy", {
                              required: "Can't be blank!",
                              pattern:{
                                value: /^[0-9]+$/,
                                message: "Wrong format, numbers only"
                              }
                            })}
                            value={newCard.yy}
                            onChange={(e) => setNewCard({...newCard, yy: e.target.value})}
                            maxLength={2} 
                            placeholder="YY"
                            className="w-full h-full"/>
                            <Errors message={errors.yy?.message} text={errors.yy?.message}/>
                        </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cvc" className="uppercase text-[13px] ml-4">cvc</label>
                        <div className={`relative w-auto h-[40px] border-[1px] ml-4 mb-9 border-lightGrayish rounded-[6px] py-2 px-5
                        ${errors.cvc?.message? "border-rose-500" : "border-lightGrayish"}`}>
                            <input 
                            {...register("cvc", {
                              required: "Can't be blank!",
                              pattern:{
                                value: /^[0-9]+$/,
                                message: "Wrong format, numbers only"
                              }
                            })} 
                            value={newCard.cvc}
                            onChange={(e) => setNewCard({...newCard, cvc: e.target.value})}
                            maxLength={3}
                            placeholder="e.g. 123"
                            className="w-full h-full"/>
                            <Errors message={errors.cvc?.message} text={errors.cvc?.message}/>
                        </div>
                    </div>

            </div>
                    <input type="submit" className="w-full h-[55px] bg-veryDarkViolet rounded-[10px] py-2 px-5 text-white"/>

        </div>

    </form>
  )
}

export default MyForm

