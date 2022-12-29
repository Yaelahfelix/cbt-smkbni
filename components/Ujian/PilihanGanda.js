import React from 'react'

function PilihanGanda({children}) {
  return (
    <label className='flex gap-2 items-start '>
        <input type="radio" id="1" className='radio radio-error w-5 h-5 ' />
        <span className='leading-tight label-text'>{children}</span>
    </label>
  )
}

export default PilihanGanda