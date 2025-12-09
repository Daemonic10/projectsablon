import React from "react";
import Textlogo from "./sharedcomponent/textlogo";

function About() {
  return (

    // Wrapper Utama
    <div className="w-full  py-14 px-5">

        {/* Memisahkan Menjadi Kiri dan Kanan */}
      <div className="max-w-7xl mx-auto flex flex-row gap-10">

        {/* BAGIAN KIRI yang berisi penjelasan */}
        <div className="lg:w-1/2 bg-white flex flex-col gap-3 p-10 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-bold">Royal Screen Printing</h1>
          <p className="text-lg mt-8">
            Royal Screen Printing adalah perusahaan yang bergerak di bidang jasa
            sablon dan percetakan yang berfokus pada kualitas, ketepatan waktu,
            dan kepuasan pelanggan. Berdiri sejak [tahun berdiri], kami telah
            melayani berbagai kebutuhan sablon untuk individu, komunitas,
            perusahaan, hingga instansi pemerintah.
          </p>

          <p className="text-lg">
            Kami mengkhususkan diri dalam teknik screen printing (sablon manual)
            dan sablon digital untuk berbagai media seperti kaos, hoodie, tote
            bag, topi, dan media tekstil lainnya. Dengan peralatan modern dan
            tenaga kerja berpengalaman, Royal Screen Printing mampu menghasilkan
            cetakan yang tajam, tahan lama, dan sesuai dengan desain yang
            diinginkan.
          </p>
        </div>

        {/* BAGIAN KANAN dan memisahhkan menjadi atas dan bawah 

            yang berisi logo,jumlah client,expereince
        */}
        <div className="lg:w-1/2 flex flex-col gap-5">

          {/* Logo Box dari sharedcomponent*/}
          <Textlogo/>

          {/* Pemisah jumlah client dan experience */}
          <div className="flex flex-row gap-5 items-center justify-center text-center">

            {/* Client */}
            <div className="bg-white w-1/2 p-10 rounded-2xl shadow-xl">
              <h1 className="font-bold text-3xl">100+</h1>
              <div className="flex justify-center py-2">
                <hr className="w-2/3 border" />
              </div>
              <h1 className="font-bold text-2xl">Client</h1>
            </div>

            {/* Experience */}
            <div className="bg-white w-1/2 p-10 rounded-2xl shadow-xl">
              <h1 className="font-bold text-3xl">5 TH</h1>
              <div className="flex justify-center py-2">
                <hr className="w-2/3 border" />
              </div>
              <h1 className="font-bold text-2xl">Experience</h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
 