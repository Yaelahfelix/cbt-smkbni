import React, { useState } from "react";
import PilihanGanda from "./PilihanGanda";

function Soal() {


  return (
    <div className="tracking-wider text-sm relative bg-white px-5 py-7 rounded-lg border shadow-md">
        <h4 className="absolute -top-3 -left-3 font-bold bg-pallete-red text-white px-3 py-1 rounded-full">1</h4>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        obcaecati alias provident.
      </p>
      <ul className="flex flex-col gap-2">
      <PilihanGanda>Sumatera</PilihanGanda>
      <PilihanGanda>Di ujung kulon deket papua jauh indonesia</PilihanGanda>
      <PilihanGanda>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quis nam exercitationem eveniet ea aspernatur?</PilihanGanda>
      <PilihanGanda>Indonesia</PilihanGanda>
      </ul>
    </div>
  );
}

export default Soal;
