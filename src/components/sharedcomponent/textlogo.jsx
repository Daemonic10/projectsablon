
import React from "react";

function textlogo() {
  return (
    // WRAPPER UTAMA
    <div className="bg-white rounded-2xl shadow-xl">
      {/* WRAPPER UNTUK MEMBUAT TEXT VERTIKAL */}
      <div className="flex flex-col text-center font-bold p-25 leading-tight">
        <p className="text-3xl">ROYAL</p>
        <p className="text-6xl">SCREEN</p>
        <p className="text-3xl">PRINTING</p>
      </div>
    </div>
  );
}

export default textlogo;
