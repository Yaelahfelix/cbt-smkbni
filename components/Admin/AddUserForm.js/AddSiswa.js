import {
  BuildingLibraryIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function AddSiswa() {
  return (
    <section className="flex flex-col gap-1">
      <h1 className="text-slate-800 font-bold">Data User</h1>
      <div className="flex flex-col gap-5">
        <label className="input-group">
          <div className="py-2 px-3 bg-red-200">
            <UserIcon className="text-slate-800 w-6" />
          </div>
          <input
            type="text"
            placeholder="ID Siswa"
            className="input w-full h-10 text-sm"
          />
        </label>
        <label className="input-group">
          <div className="py-2 px-3 bg-red-200">
            <LockClosedIcon className="text-slate-800 w-6" />
          </div>
          <input
            type="text"
            placeholder="Password Siswa"
            className="input w-full h-10 text-sm"
          />
        </label>
        <label className="input-group">
          <div className="py-2 px-3 bg-red-200">
            <BuildingLibraryIcon className="text-slate-800 w-6" />
          </div>
          <input
            type="text"
            placeholder="Kelas Siswa"
            className="input w-full h-10 text-sm"
          />
        </label>
      </div>
    </section>
  );
}

export default AddSiswa;
