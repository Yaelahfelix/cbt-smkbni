import React, { useState } from "react";
import PilihanGanda from "./PilihanGanda";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/solid";

function Soal({data,noSoal, deleteData}) {
  const [totalPG, setTotalPG] = useState(1);

  const addPG = () => {
    setTotalPG(totalPG + 1);
  };

  const removePG = () => {
    deleteData(`${noSoal}.pilihanGanda.${totalPG-1}`)
    setTotalPG(totalPG - 1);
  };

  return (
    <div className="bg-slate-100 flex shadow-md border flex-col gap-5 rounded-lg">
      <div className="p-5">
        <p>Ini soal</p>
        <PilihanGanda totalPG={totalPG} data={data} noSoal={noSoal}/>
      </div>
      <div className="bg-white p-3 rounded-md shadow">
        <h3 className="text-center text-sm font-semibold">
          Pengaturan pilihan ganda
        </h3>
        <div className="flex justify-center gap-5">
          <PlusCircleIcon className="w-7 text-blue-500" onClick={addPG} />
          <TrashIcon className="w-7 text-red-500" onClick={removePG} />
        </div>
      </div>
    </div>
  );
}

export default Soal;
