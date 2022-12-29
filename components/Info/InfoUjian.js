import { BuildingLibraryIcon, ClockIcon, UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

function InfoUjian() {
  return (
    <div className="bg-pallete-light-yellow py-7 p-2 flex flex-col gap-2 rounded-lg shadow-sm">
            <div className="flex gap-1 justify-center text-pallete-red mb-2">
              <h2 className="text-2xl md:text-4xl font-semibold">Matematika</h2>
            </div>

            <div className="flex gap-2 text-pallete-red">
              <UserIcon className="w-5" />
              <h2 className="text-sm md:text-base opacity-90 text-pallete-red">
                Tiara Ris Rahartika S. Pd
              </h2>
            </div>

            <div className="flex gap-2 text-pallete-red items-center">
              <BuildingLibraryIcon className="w-5" />
              <h2 className="text-sm md:text-base opacity-90 text-pallete-red w-10/12">
                XI_TKJ_1, XI_TKJ_2, XI_TKJ_3, XI_TKJ_4, XI_AKL, XI_OTKP_1,
                XI_OTKP_2
              </h2>
            </div>

            <div className="flex gap-2 text-pallete-red">
              <ClockIcon className="w-5" />
              <h2 className="text-sm md:text-base opacity-90 text-pallete-red">
                09.00 - 11.00 (120 Menit)
              </h2>
            </div>
          </div>
  )
}

export default InfoUjian