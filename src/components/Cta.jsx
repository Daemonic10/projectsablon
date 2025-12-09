import React from "react";

function Cta() {
  return (
    // WRAPPER UTAMA
    <div className="w-full flex justify-center py-16 px-5 bg-gray-200">
      {/* MEMBUAT CARD */}
      <div className="bg-white rounded-2xl shadow-xl py-18 px-20 max-w-7xl w-full text-center flex flex-col gap-6">

      {/* MEMBUAT TEXT UNTUL TITLE*/}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Hubungi Layanan Sablon Kami <br />
          Untuk Hasil Terbaik dan Berkualitas
        </h2>
      
      {/* MEMBUUAT TEXT UNTUK SUBTITLE */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Jika anda ingin membuat sablon untuk kaos, jaket, totebag, atau kebutuhan lainnya,
          silakan hubungi tim kami dengan menekan tombol di bawah ini sekarang juga.
        </p>

      {/* MEMBUAT TOMVOL */}
        <div className="">
        <button className=" bg-[#F2FD7D] hover:bg-yellow-400 transition py-3 px-8 rounded-full font-bold shadow-md">
          Hubungi Sekarang
        </button>
        </div>

      </div>
    </div>
  );
}

export default Cta;
