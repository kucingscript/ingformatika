import { useState } from "react";

import { dataImages } from "./data";

function komentar() {
  const [imgs, setImgs] = useState(dataImages);

  return (
    <section name="komentar" className="min-h-screen w-full md:h-screen">
      {/* Container */}
      <div className="container w-full h-full">
        <h1 className="text-center text-5xl text-primary font-bold tracking-wider mt-24 md:mt-0">
          Komentar
        </h1>
        <p className="text-center text-neutral-content text-sm">
          Ingformatika Posting
        </p>
        <div className="flex justify-center items-center mt-12">
          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {imgs.map((img, index) => {
              return (
                <div
                  className="card shadow-2xl m-5 pt-5 rounded-xl"
                  index={index}
                >
                  <figure>
                    <img
                      src={img.img}
                      alt={img.name}
                      className="w-16 h-16 rounded-full object-cover md:w-20 md:h-20 border-2 border-primary"
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
      </div>
    </section>
  );
}

export default komentar;
