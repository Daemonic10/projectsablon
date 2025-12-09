import React from "react";

function CardWithHover({ image, title, description }) {
  return (
    // WRAPPER UTAMA
    <div className="w-74 h-90 bg-gray-200 rounded-3xl shadow-md overflow-hidden group cursor-pointer">
      {/* WRAPPER */}
      <div className="relative w-full h-full">
        {/* GAMBAR CARD */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* TITLE */}
        <div className="absolute bottom-5 w-full flex justify-center transition-all duration-300 group-hover:opacity-0">
          <h2 className="text-black text-2xl font-bold text-center">{title}</h2>
        </div>

        {/* DESKRIPSI */}
        <div
          className="
            absolute bottom-0 w-full h-28 bg-white/75 opacity-0
            group-hover:opacity-100 transition-all duration-300
            flex items-center justify-center px-4
          "
        >
          <p className="text-black text-lg font-semibold text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardWithHover;
