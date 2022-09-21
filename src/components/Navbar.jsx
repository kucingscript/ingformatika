import { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { themeChange } from "theme-change";

import { BiMenuAltLeft } from "react-icons/bi";
import { MdOutlineCloseFullscreen } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const lists = [
    { name: "beranda", link: "beranda" },
    { name: "komentar", link: "komentar" },
    { name: "stack", link: "stack" },
    { name: "request", link: "request" },
    { name: "contact", link: "contact" },
  ];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <nav className="navbar shadow-xl">
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle btn-sm"
            onClick={handleClick}
          >
            {!nav ? (
              <BiMenuAltLeft className="h-5 w-5" />
            ) : (
              <MdOutlineCloseFullscreen className="h-5 w-5" />
            )}
          </label>
          <ul
            tabIndex={0}
            className={
              !nav
                ? "hidden"
                : "menu menu-compact dropdown-content space-y-8 mt-4 px-2 backdrop-blur-sm"
            }
          >
            {lists.map((list, index) => {
              return (
                <Link to={list.link} duration={500} smooth={true} key={index}>
                  <li
                    className="capitalize cursor-pointer hover:text-primary"
                    onClick={handleClick}
                  >
                    {list.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center">
        <button className="btn btn-ghost text-primary text-xl">
          Ingformatika
          <span className="text-neutral-content"> &#60; / &#62;</span>
        </button>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <button
          data-set-theme="dracula"
          data-act-class="ACTIVECLASS"
          className="btn btn-xs btn-circle bg-[#FF7AC6] hover:bg-[#FF7AC6]"
        ></button>
        <button
          data-set-theme="night"
          data-act-class="ACTIVECLASS"
          className="btn btn-xs btn-circle bg-[#3ABFF8] hover:bg-[#3ABFF8] mx-2 md:mx-4"
        ></button>
      </div>
    </nav>
  );
}

export default Navbar;
