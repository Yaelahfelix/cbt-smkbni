import React from "react";

function Header() {
  return (
    <section className="w-full h-24 flex flex-col justify-center items-center bg-pallete-light-yellow">
      <h1 className="text-3xl md:text-4xl font-semibold text-pallete-red brightness-75 -mb-2">
        CBT
      </h1>
      <h3 className="text-sm md:text-base font-semibold text-pallete-red brightness-75">
        SMK BNI
      </h3>
    </section>
  );
}

export default Header;
