import React from "react";
import Card from "./sharedcomponent/cardwhover";

function Service() {
  return (
    // WRAPPER UTAMA
    <div className="flex flex-col justify-center items-center text-center py-8" id="service">
      {/* WRAPPER TITLE DAN SUBTITLE */}
      <div className="title">
        <p className="text-5xl font-bold ">Service</p>
        <p className="text-lg py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quia?
        </p>
      </div>

      {/* MEMBUAT CONTAINER CARD */}
      <div className="card-container flex flex-row justify-center items-center gap-20">

        {/* MEMBUAT CARD  DENGAN CARA MEMANGGIL DARI SHAREDCOMPONENT */}
        <Card image="/public/cardimage/image1.jpg" title="Kaos Image" description="“Kualitas cetak tajam dengan warna tahan lama untuk kebutuhan komunitas, brand, dan bisnis.”" />
        
        <Card image="/public/cardimage/image2.jpeg" title="Totebag Image" description="“Kualitas cetak tajam dengan warna tahan lama untuk kebutuhan komunitas, brand, dan bisnis.”" />

        <Card image="/public/cardimage/image3.jpeg" title="Hoodie Image" description="“Kualitas cetak tajam dengan warna tahan lama untuk kebutuhan komunitas, brand, dan bisnis.”" />
      </div>
    </div>
  );
}

export default Service;
