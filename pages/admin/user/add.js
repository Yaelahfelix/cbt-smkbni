import React from "react";
import Nav from "../../../components/Navigation/Nav";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import AddSiswa from "../../../components/Admin/AddUserForm.js/AddSiswa";

function AddUser() {
  return (
    <section>
      <Nav />
      <section className="m-10">
        <h1 className="text-2xl font-semibold text-center text-slate-800">
          Tambah User
        </h1>
        <p className="text-sm text-center text-slate-800">
          Isi kolom dibawah ini sesuai dengan data user yang ingin ditambahkan!
        </p>
      </section>
      <section className="bg-yellow-100 mx-5 px-5 py-3 shadow-md rounded-lg flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <h1 className=" text-slate-800 font-bold">Role User</h1>

          <div className="flex justify-between text-slate-800">
            <div className="flex gap-2">
              <input
                type="radio"
                name="tipeUser"
                id="siswa"
                className="radio radio-error w-5 h-5"
                checked
              />
              <label htmlFor="siswa" className="text-sm">
                Siswa
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="tipeUser"
                id="guru"
                className="radio radio-error w-5 h-5"
              />
              <label htmlFor="guru" className="text-sm">
                Guru
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="tipeUser"
                id="admin"
                className="radio radio-error w-5 h-5"
              />
              <label htmlFor="admin" className="text-sm">
                Admin
              </label>
            </div>
          </div>
        </div>
        <AddSiswa />
      </section>
    </section>
  );
}

export default AddUser;
