import Image from "next/image";
import Header from "../components/Navigation/Header";
import Nav from "../components/Navigation/Nav";
import TableNilai from "../components/Table/TableNilai";
import TableUjian from "../components/Table/TableUjian";
import LogoBNI from "../public/image/logo_bni.png";

export default function Home() {
  return (
    <main className="font-satoshi">
      <Header/>
      <Nav />
      <section className="p-5 md:p-10">
        <section>
          <div className="text-pallete-purple">
            <h1 className="font-bold text-4xl md:text-5xl">Halo</h1>
            <h4 className="text-base md:text-lg">Ferdinand Felix Hermawan Putra</h4>
            <p className="text-xs md:text-sm  w-10/12 opacity-75">
              Semoga ujian kamu akan mendapatkan hasil nilai yang memuaskan
            </p>
          </div>
        </section>
        <section>
          <TableUjian />
          <TableNilai />
        </section>
      </section>
    </main>
  );
}
