import { useRef, useState } from "react";
import YellowBtn from "../components/Button/YellowBtn";

export default function Page() {
  const [loginGuru, setLoginGuru] = useState(false);
  const handleChange = (e) => setLoginGuru(e.target.checked);
  const [errorCode, setErrorCode] = useState(0);

  return (
    <div className="font-satoshi grid items-center h-screen bg-pallete-light-yellow p-5">
      <section className="flex justify-center">
        <section className="w-full md:w-8/12 lg:w-[500px] p-10 sm:p-20 bg-white shadow-lg rounded-lg flex items-center flex-col gap-5">
          <h1 className="text-center font-bold text-5xl text-pallete-purple">
            CBT
            <br />
            <p className="text-black text-lg">SMK BNI</p>
          </h1>
          <div className="w-full">
            <label htmlFor="password" className="block font-semibold">
              {loginGuru ? "ID Guru/Admin" : "ID Peserta Ujian"}
            </label>
            <input
              type="text"
              name="password"
              className="w-full block border-b-2 border-pallete-yellow focus:outline-none focus:border-pallete-red transition-colors"
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block font-semibold">
              {loginGuru ? "Password Guru/Admin" : "Password Peserta Ujian"}
            </label>
            <input
              type="text"
              name="password"
              className="w-full block border-b-2 border-pallete-yellow focus:outline-none focus:border-pallete-red transition-colors"
            />
            {errorCode == 1 && (
              <p className="absolute text-sm italic text-pallete-red">
                Maaf ID/Password kamu salah!
              </p>
            )}
          </div>
          <div className="flex w-full items-center justify-between flex-row-reverse">
            <YellowBtn>Login</YellowBtn>
            <div className="flex justify-center items-center gap-2">
              <input
                id="loginGuru"
                type="checkbox"
                onChange={handleChange}
                value={loginGuru}
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-pallete-yellow checked:border-pallete-yellow focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
              />

              <label
                for="loginGuru"
                style={{ userSelect: "none" }}
                onCopy={(e) => e.preventDefault()}
                className="text-xs sm:text-sm"
              >
                Login sebagai Guru/Admin
              </label>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
