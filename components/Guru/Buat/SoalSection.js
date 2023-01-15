import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Soal from "./Soal";

function SoalSection({ data, deleteData }) {
  const [totalSoal, setTotalSoal] = useState(1);
  const soal = [];
  const addSoal = () => {
    setTotalSoal(totalSoal + 1);
  };
  const removeSoal = () => {
    deleteData(`${totalSoal}`)
    setTotalSoal(totalSoal - 1);
  };

  for (let i = 0; i < totalSoal; i++) {
    soal.push(
      <Soal data={data} key={i} noSoal={i + 1} deleteData={deleteData} />
    );
  }

  return (
    <div className="m-5 flex flex-col gap-5">
      {soal}
      <div className="flex flex-col gap-2">
        <button className="btn btn-warning " onClick={addSoal}>
          <PlusIcon className="w-7 mr-2" /> Tambah soal baru
        </button>
        <button className="btn btn-error " onClick={removeSoal}>
          <TrashIcon className="w-7 mr-2" />
          Hapus soal terakhir
        </button>
      </div>
    </div>
  );
}

export default SoalSection;
