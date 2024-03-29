import { Link } from "react-scroll";

import { FaCodeBranch, FaBug } from "react-icons/fa";

import HeroImages from "../assets/hero.svg";

function Beranda() {
  return (
    <section name="beranda" className="w-full min-h-screen md:h-screen">
      {/* container */}
      <div className="container h-full flex items-center justify-center flex-col mt-16 md:mt-0 px-0 xl:px-20 md:justify-between md:flex-row">
        {/* left side */}
        <div className="flex items-center flex-col mt-12 md:mt-0 md:items-start md:w-1/2">
          <h2 className="text-secondary font-semibold text-2xl md:text-3xl">
            Teknik
          </h2>
          <h1 className="text-primary font-bold tracking-wider text-4xl md:text-5xl">
            Informatika
          </h1>
          <p className="text-neutral-content pt-2 px-4 text-center text-sm leading-6 md:px-0 md:text-justify md:text-md xl:text-[16px]">
            Teknik Informatika merupakan bidang ilmu yang mempelajari bagaimana
            menggunakan teknologi komputer secara optimal guna menangani masalah
            transformasi atau pengolahan data dengan proses logika.
          </p>

          {/* button */}
          <div className="flex w-full justify-center space-x-2 mt-4 items-center md:justify-start">
            {/* Left */}
            <Link to="komentar" smooth={true} duration={500}>
              <button className="btn btn-sm md:btn-md">
                Mengoding
                <span className="ml-2">
                  <FaCodeBranch className="h-3 w-3 md:h-4 md:w-4" />
                </span>
              </button>
            </Link>

            {/* Right */}
            <Link to="komentar" smooth={true} duration={500}>
              <button className="btn btn-primary btn-sm md:btn-md">
                Menghacker
                <span className="ml-2">
                  <FaBug className="h-3 w-3 md:h-4 md:w-4" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center flex-col mt-12 md:mt-6">
          {/* image container */}
          <div className="w-full ">
            <img
              src={HeroImages}
              alt="Hero Images"
              className="w-64 h-auto object-cover md:w-80"
            />
          </div>
          <p className="text-neutral-content text-sm">
            *Potret pengoding handal
          </p>
        </div>
      </div>
    </section>
  );
}

export default Beranda;
