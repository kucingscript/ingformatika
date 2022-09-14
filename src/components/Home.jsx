import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaCodeBranch, FaBug } from "react-icons/fa";

import HeroImages from "../assets/hero.webp";

function Home() {
  return (
    <section name="home" className="w-full h-[calc(100vh-64px)]">
      {/* container */}
      <div className="container h-full flex items-center justify-center flex-col mt-16 md:mt-0 md:justify-between md:flex-row">
        {/* left side */}
        <div className="flex items-center flex-col mt-12 md:mt-0 md:items-start md:w-1/2">
          <h2 className="text-secondary font-semibold text-2xl md:text-3xl">
            Teknik
          </h2>
          <h1 className="text-primary font-bold tracking-wider text-4xl md:text-5xl">
            Informatika
          </h1>
          <p className="text-neutral-content pt-2 px-4 text-center text-sm leading-6 md:px-0 md:text-justify md:text-md">
            Teknik Informatika merupakan bidang ilmu yang mempelajari bagaimana
            menggunakan teknologi komputer secara optimal guna menangani masalah
            transformasi atau pengolahan data dengan proses logika.
          </p>

          {/* button */}
          <div className="flex w-full justify-center space-x-2 mt-4 items-center md:justify-start">
            {/* Left */}
            <Link to="gallery" smooth={true} duration={500}>
              <button className="btn btn-sm md:btn-md">
                Mengoding
                <span className="ml-2">
                  <FaCodeBranch className="h-3 w-3 md:h-4 md:w-4" />
                </span>
              </button>
            </Link>

            {/* Right */}
            <Link to="gallery" smooth={true} duration={500}>
              <button className="btn btn-primary btn-sm md:btn-md">
                Menghacker
                <span className="ml-2">
                  <FaBug className="h-3 w-3 md:h-4 md:w-4" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center flex-col mt-16 md:mt-0">
          {/* image container */}
          <div className="w-full md:-mt-10 ">
            <img
              src={HeroImages}
              alt="Hero Images"
              className="w-96 h-auto object-cover"
            />
          </div>
          <p className="text-neutral-content text-sm -mt-6">
            Potret pengoding handal
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
