import React from "react";
import YellowBtn from "../Button/YellowBtn";

function TableUjian() {
  return (
    <section className="my-8">
    <h3 className="text-center font-semibold text-pallete-purple">Tabel Ujian</h3>
      <div className="mx-auto overflow-scroll md:overflow-hidden shadow-lg">
        <table className="w-[700px] sm:w-[800px] md:w-full border border-pallete-purple">
          <tbody>
            <tr className="text-sm text-center">
              <th className="tableStyle tableHeader stickyTable">Nama Ujian</th>
              <th className="tableStyle tableHeader">Guru Mapel</th>
              <th className="tableStyle tableHeader">Kelas</th>
              <th className="tableStyle tableHeader">Waktu</th>
              <th className="tableStyle tableHeader">Jam Mulai</th>
              <th className="tableStyle tableHeader">Jam Selesai</th>
              <th className="tableStyle tableHeader">aaa</th>
            </tr>
            <tr className="text-xs text-center">
              <td className="tableStyle stickyTable">Matematika</td>
              <td className="tableStyle">Tiara Ris Rahartika S.Pd</td>
              <td className="tableStyle">XI TKJ 4</td>
              <td className="tableStyle">90 Menit</td>
              <td className="tableStyle">08.00</td>
              <td className="tableStyle">08.30</td>
              <td><YellowBtn>Lihat Ujian</YellowBtn></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TableUjian;
