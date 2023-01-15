import { data } from "autoprefixer";
import React, { useState } from "react";

function PilihanGanda({ totalPG, data, noSoal }) {
  const pilihanGanda = [];
  for (let i = 0; i < totalPG; i++) {
    pilihanGanda.push(<Opsi key={i} id={i} noSoal={noSoal} data={data} />);
  }

  return <div className="flex flex-col gap-3">{pilihanGanda}</div>;
}

function Opsi({ id, noSoal, data }) {
  return (
    <div className="flex py-3 px-2 bg-white rounded-lg shadow gap-3" id={id}>
      <input type="radio" className="radio radio-secondary w-5 h-5" />
      <input
        type="text"
        className="outline-none"
        placeholder={`Opsi ${id}`}
        {...data(`${noSoal}.pilihanGanda.${id}`)}
      />
    </div>
  );
}

export default PilihanGanda;
