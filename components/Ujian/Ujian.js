import React from "react";
import { FullScreen } from "react-full-screen";
import UjianNav from "../Navigation/UjianNav";
import Soal from "./Soal";

function Ujian({ fullScreen }) {
  return (
    <>
      <FullScreen handle={fullScreen} className="bg-slate-100 overflow-scroll">
        {fullScreen.active && (
          <section
            onCopy={(e) => e.preventDefault()}
            style={{ userSelect: "none" }}
          >
            <UjianNav />
            <section className=" mx-5 my-16 flex flex-col gap-5">
              <Soal />
              <Soal />
              <Soal />
            </section>
          </section>
        )}
      </FullScreen>
    </>
  );
}

export default Ujian;
