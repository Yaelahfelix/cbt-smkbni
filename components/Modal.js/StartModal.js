import React from "react";

function StartModal({fullScreen}) {
  return (
    <>
      <label htmlFor="my-modal" className="btn btn-warning">
        Mulai Ujian
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Anda akan memulai ujian ini!</h3>
          <p className="py-4">
            Ketika anda sudah memulai, anda tidak diperbolehkan keluar dari halaman ujian jika tidak anda akan <b>dikeluarkan dari ujian</b> ini. 
          </p>
          <div className="modal-action">
             <label htmlFor="my-modal" className="btn btn-error">
           Batalkan 
            </label>
            <label htmlFor="my-modal" className="btn btn-warning" onClick={fullScreen.enter}>
              Mulai
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartModal;
