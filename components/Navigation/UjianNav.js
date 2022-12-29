import { UserCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

function UjianNav() {
  return (
    
      <nav className="flex justify-between items-center px-5 py-5 md:px-10 bg-pallete-light-yellow shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-1">
          <UserCircleIcon className="w-7 md:w-10 text-pallete-red brightness-75" />
          <div>
            <h3 className="text-sm md:text-base text-pallete-red brightness-75 font-semibold -mb-1">
              Ferdinand Felix
            </h3>
            <h3 className="text-xs md:text-sm text-pallete-red brightness-75">Siswa</h3>
          </div>
        </div>
      </nav>
  )
}

export default UjianNav