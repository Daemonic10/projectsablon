import React from "react";

function Hero() {
  return (
    // WRAPPER UTAMA,DAN UNTUK MEMECAH KIRI DAN KANAN
    <div className="flex flex-row gap-8 px-8 py-4">
      {/* WRAPPER BAGIAN KIRI */}
      <div className="w-2/4 h-140 bg-white px-15 py-8 gap-4 rounded-2xl flex flex-col justify-center shadow-2xl">
        <h1 className="font-bold text-6xl">
          Buat Desainmu <br /> Jadi Nyata
        </h1>

        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima libero
          perspiciatis rem id, obcaecati labore sapiente laborum eum suscipit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          porro illum. Vero neque id, velit incidunt inventore nesciunt odit
          cupiditate?
        </p>

        <button className="mt-4 bg-[#F2FD7D] hover:bg-yellow-400 transition  px-4 py-2 rounded-2xl text-xl font-medium w-78">
          Pesan Sekarang
        </button>
      </div>

      {/* WRAPPER BAGIAN KANAN */}
      <div className="w-2/4 h-140 shadow-2xl">
        <img
          src="ningningreact.jpg"
          alt="halp"
          className="h-full w-full rounded-2xl object-cover object-top"
        />
      </div>
    </div>
  );
}

export default Hero;
