import React, { useEffect } from "react";
import Nav from "../../../components/Navigation/Nav";
import {
  UserIcon,
  ExclamationCircleIcon,
  BuildingLibraryIcon,
  ClockIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Rules from "../../../components/Info/Rules";
import YellowBtn from "../../../components/Button/YellowBtn";

function UjianDetail() {
  const fullScreen = useFullScreenHandle();
  return (
    <main className="font-satoshi">
      <Nav />
      <section className="m-10 flex flex-col gap-10">
        <div className="mb-3 text-center text-pallete-red">
          <h1 className="text-6xl text-center font-bold">08.00</h1>
          <h3 className="font-semibold">Selasa, 01 Januari 2022</h3>
        </div>

        <section className="mx-auto w-full md:w-8/12 lg:w-6/12 flex flex-col gap-5">
          <div className="bg-pallete-light-yellow py-7 p-2 flex flex-col gap-2 rounded-lg shadow-sm">
            <div className="flex gap-1 justify-center text-pallete-red mb-2">
              <h2 className="text-2xl md:text-4xl font-semibold">Matematika</h2>
            </div>

            <div className="flex gap-2 text-pallete-red">
              <UserIcon className="w-5" />
              <h2 className="text-sm md:text-base opacity-90 text-pallete-red">
                Tiara Ris Rahartika S. Pd
              </h2>
            </div>

            <div className="flex gap-2 text-pallete-red items-center">
              <BuildingLibraryIcon className="w-5" />
              <h2 className="text-sm md:text-base opacity-90 text-pallete-red w-10/12">
                XI_TKJ_1, XI_TKJ_2, XI_TKJ_3, XI_TKJ_4, XI_AKL, XI_OTKP_1,
                XI_OTKP_2
              </h2>
            </div>

            <div className="flex gap-2 text-pallete-red">
              <ClockIcon className="w-5" />
              <h2 className="text-sm md:text-base opacity-90 text-pallete-red">
                09.00 - 11.00 (120 Menit)
              </h2>
            </div>
          </div>

          <YellowBtn addClass="w-full" onClick={fullScreen.enter}>
            Mulai Ujian
          </YellowBtn>

          <FullScreen
            handle={fullScreen}
            className={`flex flex-col justify-center items-center gap-3 ${
              fullScreen.active && "p-4 "
            }`}
          >
            <section className={fullScreen.active && 'mx-auto w-full sm:w-8/12 lg:w-6/12'}>
              {fullScreen.active && (
                <ArrowLeftCircleIcon
                  onClick={fullScreen.exit}
                  className="text-white self-start w-10"
                />
              )}
              <section
                className={`bg-pallete-red py-7 p-2 flex flex-col gap-2 rounded-lg shadow-sm w-full ${
                  fullScreen.active && `overflow-y-scroll h-72`
                }`}
              >
                <div
                  className={`flex flex-col items-center gap-1 justify-center text-white mb-2`}
                >
                  <h2 className="text-2xl md:text-4xl font-semibold">
                    Peraturan Ujian
                  </h2>
                  {fullScreen.active && <p>Baca dan pahami peraturannya!</p>}
                </div>
                <Rules>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  nihil nobis. Quae facere unde culpa ipsam nobis inventore
                  velit, accusantium vel distinctio doloribus.
                </Rules>

                <Rules>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  nihil nobis. Quae facere unde culpa ipsam nobis inventore
                  velit, accusantium vel distinctio doloribus.
                </Rules>

                <Rules>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  nihil nobis. Quae facere unde culpa ipsam nobis inventore
                  velit, accusantium vel distinctio doloribus.
                </Rules>
              </section>
            </section>
          </FullScreen>
        </section>
      </section>
    </main>
  );
}

export default UjianDetail;
