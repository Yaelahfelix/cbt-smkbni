import React from "react";
import Nav from "../../components/Navigation/Nav";
import YellowBtn from "../../components/Button/YellowBtn";
import Clock from "../../components/Info/Clock";
import InfoUjian from "../../components/Info/InfoUjian";
import RulesSection from "../../components/Info/RulesSection";
import { useFullScreenHandle } from "react-full-screen";
import Ujian from "../../components/Ujian/Ujian";

function UjianDetail() {
  const screen1 = useFullScreenHandle();
  const screen2 = useFullScreenHandle();
  return (
    <main className="font-satoshi">
      <Nav />
      <section className="m-10 flex flex-col gap-10">
        <Clock />

        <section className="mx-auto w-full md:w-8/12 lg:w-6/12 flex flex-col gap-5">
          <InfoUjian />

          <YellowBtn addClass="w-full" onClick={screen1.enter}>
            Mulai Ujian
          </YellowBtn>

          <RulesSection fullScreen={screen1} screen2= {screen2} />
          <Ujian fullScreen={screen2} />
        </section>
      </section>
    </main>
  );
}

export default UjianDetail;
