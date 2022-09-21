import { Link } from "react-scroll";

import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  const socialMedia = [
    { item: <FaGithub />, link: "https://github.com/rasyidzkun/" },
    {
      item: <FaFacebookF />,
      link: "https://www.facebook.com/RasyidzScreamo.221016/",
    },
    { item: <FaInstagram />, link: "https://www.instagram.com/kucingscript/" },
    { item: <SiGmail />, link: "mailto:kucingscript@gmail.com" },
  ];

  return (
    <footer className="footer p-4 bg-neutral text-neutral-content md:mt-16">
      {/* Container */}
      <div className="container flex justify-between items-center flex-col space-y-2 md:flex-row md:space-y-0">
        {/* Left */}
        <div>
          <Link to="beranda" smooth={true} duration={500}>
            <button className="btn btn-ghost text-primary text-xl">
              Ingformatika
              <span className="text-neutral-content"> &#60; / &#62;</span>
            </button>
          </Link>
        </div>

        {/* Center*/}
        <div className="flex space-x-2">
          {socialMedia.map((item, index) => {
            return (
              <a
                href={item.link}
                target={"_blank"}
                rel={"noopener noreferrer"}
                key={index}
              >
                <button className="btn btn-ghost btn-circle btn-lg hover:bg-primary hover:text-white ">
                  {item.item}
                </button>
              </a>
            );
          })}
        </div>

        {/* Right */}
        <div>
          <p>
            Build with
            <span className="text-primary"> &#10084;</span> by Kucingscript
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
