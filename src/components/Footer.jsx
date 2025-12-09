import React from "react";

function Footer() {
  return (
    // WRAPPER UTAMA, DAN UNTUK MEMISAH KIRI DAN KANAN
    <div className="flex flex-row gap-8 justify-center mx-10 p-10">

      {/* WRAPPER UNTUK BAGIAN KAMAN */}
      <div className="flex flex-col bg-white w-1/2 p-8 rounded-2xl shadow-xl">
        <div className="font-bold text-6xl">
          <p className="">Before you go check out these links</p>
        </div>
        <div className=""></div>
      </div>

      {/* WRAPPER UNTUK BAGIAN KIRI, DAN MEMECAHNYA MENJADI ATAS DAN BAWAH */}
      {/* BAGIAN ATAS */}
      <div className="w-1/2 flex flex-col gap-8">
        <div className="bg-[#F2FD7D] rounded-2xl shadow-xl">
          <div className="flex flex-col text-center font-bold p-25 leading-tight">
            <p className="text-3xl">ROYAL</p>
            <p className="text-6xl">SCREEN</p>
            <p className="text-3xl">PRINTING</p>
          </div>
        </div>

      {/* BAGIAN BAWAH */}
        <div className="">
          <div className="flex items-center gap-4 bg-white py-6 px-10 rounded-2xl shadow-xl w-full">
            <img src="shopee.png" alt="shopee" className="w-20" />
            <p className="text-3xl font-bold">royall_screnn_printing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
