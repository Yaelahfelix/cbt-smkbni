import React from "react";

function ModalSalahKelas() {
  return (
    <>
      <label htmlFor="modalSalahKelas" className="btn btn-warning">
        Mulai Ujian
      </label>
      <input type="checkbox" id="modalSalahKelas" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Anda salah kelas!</h3>
          <p className="py-4">
            Ujian yang ingin anda kerjakan berasal dari kelas yang berbeda dari kelas anda, mohon di cek kembali kelas dan info ujian ini!
          </p>
          <div className="modal-action">
            
            <label
              htmlFor="modalSalahKelas"
              className="btn btn-warning"
            >
              Tutup
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSalahKelas;
