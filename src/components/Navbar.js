import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    //navbar scrolling hide and display events
    const scroll = () => {
      if (window.scrollY > 200) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const onToggleMenu = () => {
    toggleMenu();
    setDropdown(!dropdown);
  };

  const onCloseDropdown = () => {
    setShowMenu(false);
    setDropdown(false);
  };

  return (
    <header className={`bg-white border-b border-gray-500  ${!show ? "hidden" : ""}`}>
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="m-2">
          <img
            className="w-16 cursor-pointer"
            src="./assets/anydev.png"
            alt="..."
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white  md:min-h-fit min-h-[60vh] left-0 ${
            dropdown ? "top-[12%]" : "-top-[100%]"
          } md:w-auto w-full flex flex-col items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
            <li>
              <a className="hover:text-blue-400" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="#">
                Solution
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="#">
                Developers
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
          <img
            onClick={onToggleMenu}
            height={"20px"}
            width={"20px"}
            className="text-3xl cursor-pointer md:hidden"
            src={`${dropdown ? "https://cdn-icons-png.flaticon.com/128/10727/10727988.png" : "https://cdn-icons-png.flaticon.com/128/10263/10263890.png"}`}
            alt="Menu Icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
