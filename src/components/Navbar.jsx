import React from 'react'

function Navbar() {
  return (
    // WRAPPER UTAMA
    <div className="py-4 px-8" id='home'>
      {/* MEMBUAT MENJADI HORIXONTAL */}
      <div className="flex justify-between items-center bg-white p-10 rounded-2xl py-8 px-8">

        {/* LOGO */}
        <div className="font-bold text-2xl">Royal Screen Printing</div>

        {/* MENU */}
        <div className="text-center flex gap-2">
          <a
            href="#home"
            className="mx-1 px-6 py-2 rounded-3xl font-bold transition-all duration-300 hover:bg-gray-100 hover:text-black hover:shadow-md"
          >
            Home
          </a>

          <a
            href="#service"
            className="mx-1 px-6 py-2 rounded-3xl font-bold transition-all duration-300 hover:bg-gray-100 hover:text-black hover:shadow-md"
          >
            Service
          </a>

          <a
            href="#portofolio"
            className="mx-1 px-6 py-2 rounded-3xl font-bold transition-all duration-300 hover:bg-gray-100 hover:text-black hover:shadow-md"
          >
            Portofolio
          </a>

          <a
            href="#about"
            className="mx-1 px-6 py-2 rounded-3xl font-bold transition-all duration-300 hover:bg-gray-100 hover:text-black hover:shadow-md"
          >
            About
          </a>

          <a
            href="#contact"
            className="mx-1 px-6 py-2 rounded-3xl font-bold transition-all duration-300 hover:bg-gray-100 hover:text-black hover:shadow-md"
          >
            Contact
          </a>
        </div>

        {/* BUTTON */}
        <div>
          <a href="#contact">
            <button className="bg-[#F2FD7D] hover:bg-yellow-400 transition font-bold px-8 py-2 rounded-3xl">
              Hubungi Kami
            </button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Navbar
