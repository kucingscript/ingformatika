import React, { useState } from "react";

import { images } from "./data";

function Gallery() {
  const [imgs, setImgs] = useState(images);

  return (
    <section
      name="gallery"
      className="max-w-h-screen w-full md:h-screen mt-16 md:mt-0"
    >
      <h1 className="text-center text-5xl text-primary font-bold tracking-wider mb-12 md:mb-0">
        Galeri
      </h1>
      <div className="container w-full h-full flex justify-center items-center">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {imgs.map((img, index) => {
            return (
              <div className="card shadow-2xl mx-4 my-5" index={index}>
                <figure>
                  <img
                    src={img.img}
                    alt={img.name}
                    className="w-16 h-16 rounded-full object-cover md:w-20 md:h-20"
                  />
                </figure>
                <div className="card-body -mt-5 text-center">
                  <h2 className="card-title text-primary mx-auto capitalize">
                    {img.name}
                  </h2>
                  <p className="text-neutral-content text-sm capitalize">
                    {img.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
