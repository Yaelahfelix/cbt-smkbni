import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import React, { use } from "react";
import { FullScreen} from "react-full-screen";
import Rules from "./Rules";

function RulesSection({fullScreen}) {

  return (
    <FullScreen
      handle={fullScreen}
      className={`flex flex-col justify-center items-center gap-3 ${
        fullScreen.active && "p-4 "
      }`}
    >
      <section
        className={fullScreen.active && "mx-auto w-full sm:w-8/12 lg:w-6/12"}
      >
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil
            nobis. Quae facere unde culpa ipsam nobis inventore velit,
            accusantium vel distinctio doloribus.
          </Rules>

          <Rules>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil
            nobis. Quae facere unde culpa ipsam nobis inventore velit,
            accusantium vel distinctio doloribus.
          </Rules>

          <Rules>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil
            nobis. Quae facere unde culpa ipsam nobis inventore velit,
            accusantium vel distinctio doloribus.
          </Rules>
        </section>
      </section>
    </FullScreen>
  );
}

export default RulesSection;
