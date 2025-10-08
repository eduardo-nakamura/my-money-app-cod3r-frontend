import React from 'react'

const CustomButton = ({ disabled=false, btnType = "button", btnClass = "", onClick, children }) => (
    <button disabled={disabled} type={btnType} className={`btn btn-${btnClass}`} onClick={onClick}>
        {children}
    </button>
)

export default CustomButton