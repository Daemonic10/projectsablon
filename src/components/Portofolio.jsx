import React from "react";

function Portofolio() {
  return (
    // WRAPPER UTAMA
    <div className="w-full flex flex-col justify-center items-center p-6" id="portofolio">
      {/* WRAPPER TITLE DAN SUBTITLE */}
      <div className="flex flex-col justify-center text-center mb-8">
        <p className="title text-5xl font-bold">Portofolio</p>
        <p className="subtitle text-lg py-4 max-w-xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
          mollitia!
        </p>
      </div>

      {/* MEMBUAT GRID UNTUK GAMBAR */}
      <div className="grid grid-cols-5 gap-4 w-full max-w-5xl auto-rows-[180px]">

        {/* GAMBAR 1 */}
        <div className="col-span-2 row-span-2 bg-gray-200 rounded-xl overflow-hidden">
          <img
            src="/public/porto-image/pimage-1.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* GAMBAR 2 */}
        <div className="col-span-1 bg-gray-200 rounded-xl overflow-hidden">
          <img
            src="/public/porto-image/pimage2.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* GAMBAR 3 */}

        <div className="col-span-2 bg-gray-200 rounded-xl overflow-hidden">
          <img
            src="/public/porto-image/pimage3.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        {/* GAMBAR 4 */}

        <div className="col-span-3 row-span-2 bg-gray-200 rounded-xl overflow-hidden">
          <img
            src="/public/porto-image/pimage4.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* GAMBAR 5 */}
        <div className="col-span-2 bg-gray-200 rounded-xl overflow-hidden">
          <img
            src="ningningreact.jpg"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
