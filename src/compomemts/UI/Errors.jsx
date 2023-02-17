import React from 'react'

const Errors = ({text, message}) => {
  return (
    <div className={`text-rose-500 text-[11px] absolute top-10 left-0
    ${message? "block" : "hidden"}`}
    >{text}</div>
  )
}

export default Errors