import React from "react";

function Contact() {
  return (
    // WRAPPER UTAMA dan UNTUK MEMISAH KIRI DAN KANAN
    <div className="w-full flex flex-row justify-center py-14 bg-gray-200" id="contact">

      {/* WRAPPER BAGIAN KIRI */}
      <div className="flex gap-10 items-center">

        {/* MEMISAH BAGIAN KE BAWAH */}
        <div className="flex flex-col gap-8">

          {/* EMAIL */}
          <div className="flex items-center gap-4 bg-white py-4 px-6 rounded-2xl shadow-xl w-[350px]">
            <img src="email.png" alt="email" className="w-10" />
            <p className="text-lg font-semibold">cs@royalscreenprinting</p>
          </div>

          {/* WHATSAPP */}
          <div className="flex items-center gap-4 bg-white py-4 px-6 rounded-2xl shadow-xl w-[350px]">
            <img src="whatsapp.png" alt="whatsapp" className="w-10" />
            <p className="text-lg font-semibold">+62 822-1009-4228</p>
          </div>

          {/* INSTAGRAM */}
          <div className="flex items-center gap-4 bg-white py-4 px-6 rounded-2xl shadow-xl w-[350px]">
            <img src="social-media.png" alt="instagram" className="w-10" />
            <p className="text-lg font-semibold">@royalscreenprinting</p>
          </div>

        </div>

        {/* WRAPPER BAGIAN KANAN */}
        {/* MAP RIGHT SIDE */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.076810681093!2d106.6766834747641!3d-6.253610493734888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa528a07966b%3A0x7a1e802b9ff0f958!2sRoyal%20Screen%20Printing!5e0!3m2!1sen!2sid!4v1765196737540!5m2!1sen!2sid"
            className="w-[750px] h-[350px] rounded-2xl shadow-xl"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;
