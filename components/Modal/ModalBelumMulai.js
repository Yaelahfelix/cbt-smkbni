import React from "react";

function ModalBelumMulai({ start, fullScreen }) {
  return (
    <>
      {start ? (
        <label onClick={fullScreen.enter} className="btn btn-warning">
          Mulai Ujian
        </label>
      ) : (
        <label htmlFor="modalBelumMulai" className="btn btn-warning">
          Mulai Ujian
        </label>
      )}
      <input type="checkbox" id="modalBelumMulai" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Ujian ini belum dibuka!</h3>
          <p className="py-4">
            Soal-soal yang ingin anda kerjakan belum dibuka, silahkan coba lagi
            untuk memulai ujian pada waktu yang sudah ditentukan.
          </p>
          <div className="modal-action">
            <label htmlFor="modalBelumMulai" className="btn btn-warning">
              Tutup
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalBelumMulai;
