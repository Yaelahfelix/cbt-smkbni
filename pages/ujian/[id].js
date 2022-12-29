import React, { useState } from "react";
import Nav from "../../components/Navigation/Nav";
import Clock from "../../components/Info/Clock";
import InfoUjian from "../../components/Info/InfoUjian";
import RulesSection from "../../components/Info/RulesSection";
import { useFullScreenHandle } from "react-full-screen";
import Ujian from "../../components/Ujian/Ujian";
import ModalBelumMulai from "../../components/Modal/ModalBelumMulai";
import ModalSalahKelas from "../../components/Modal/ModalSalahKelas";

function UjianDetail() {
  const screen1 = useFullScreenHandle();
  const screen2 = useFullScreenHandle();
  const [start, setStart] = useState(true);
  const [salahKelas, setSalahKelas] = useState(false);
  return (
    <main className="font-satoshi">
      <Nav />
      <section className="m-10 flex flex-col gap-10">
        <Clock />

        <section className="mx-auto w-full md:w-8/12 lg:w-6/12 flex flex-col gap-5">
          <InfoUjian />

          {salahKelas ? (
            <ModalSalahKelas />
          ) : (
            <ModalBelumMulai start={start} fullScreen={screen1} />
          )}

          <RulesSection fullScreen={screen1} screen2={screen2} />
          <Ujian fullScreen={screen2} />
        </section>
      </section>
    </main>
  );
}

export default UjianDetail;
