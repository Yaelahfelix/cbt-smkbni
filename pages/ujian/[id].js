import React from "react";
import Nav from "../../components/Navigation/Nav";
import YellowBtn from "../../components/Button/YellowBtn";
import Clock from "../../components/Info/Clock";
import InfoUjian from "../../components/Info/InfoUjian";
import RulesSection from "../../components/Info/RulesSection";
import { useFullScreenHandle } from "react-full-screen";

function UjianDetail() {
  const fullScreen = useFullScreenHandle();
  return (
    <main className="font-satoshi">
      <Nav />
      <section className="m-10 flex flex-col gap-10">
        <Clock />

        <section className="mx-auto w-full md:w-8/12 lg:w-6/12 flex flex-col gap-5">
          <InfoUjian />

          <YellowBtn addClass="w-full" onClick={fullScreen.enter}>
            Mulai Ujian
          </YellowBtn>

          <RulesSection fullScreen={fullScreen}/>
        </section>
      </section>
    </main>
  );
}

export default UjianDetail;
