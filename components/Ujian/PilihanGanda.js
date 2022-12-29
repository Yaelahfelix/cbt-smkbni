import React from 'react'

function PilihanGanda({children}) {
  return (
    <div className='flex gap-2 items-start'>
        <input type="radio" name="1" id="1" className='radio radio-error w-5 h-5 ' />
        <label className='leading-tight'>{children}</label>
    </div>
  )
}

export default PilihanGanda