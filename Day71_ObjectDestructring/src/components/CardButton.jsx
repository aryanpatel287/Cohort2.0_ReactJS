import React from 'react'

const CardButton = (props) => {
    return (
        <div>
            <button className='bg-[#F5F5F5] px-[10px] py-[5px] rounded-4xl flex items-center gap-1 shadow-lg cursor-pointer active:scale-[0.95]'>
                {props.innerText}{props.icon}
            </button>
        </div>
    )
}

export default CardButton
