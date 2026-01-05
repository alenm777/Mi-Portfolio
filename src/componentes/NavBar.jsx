import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../assests/logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f7d] text-gray-300 z-50">
      
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" style={{ width: "150px" }} />
      </div>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-6">
        <li><Link to="inicio" smooth duration={500}>Inicio</Link></li>
        <li><Link to="about" smooth duration={500}>Acerca de mí</Link></li>
        <li><Link to="habilidades" smooth duration={500}>Habilidades</Link></li>
        <li><Link to="trabajos" smooth duration={500}>Trabajos</Link></li>
        <li><Link to="contacto" smooth duration={500}>Contacto</Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0c0f45] flex flex-col justify-center items-center"
        }
      >
        {["inicio", "about", "habilidades", "trabajos", "contacto"].map((item) => (
          <li key={item} className="py-6 text-4xl">
            <Link onClick={handleClick} to={item} smooth duration={500}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social sidebar */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
            <button
              onClick={() =>
                openLink("https://www.linkedin.com/in/al%C3%A9n-mu%C3%B1oz-107560231/")
              }
              className="flex justify-between items-center w-full text-gray-300 px-4"
            >
              Linkedin <FaLinkedin size={30} />
            </button>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
            <button
              onClick={() => openLink("https://github.com/alenm777")}
              className="flex justify-between items-center w-full text-gray-300 px-4"
            >
              GitHub <FaGithub size={30} />
            </button>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#45ac60]">
            <button
              onClick={() => openLink("https://wa.link/ypa2zu")}
              className="flex justify-between items-center w-full text-gray-300 px-4"
            >
              WhatsApp <FaWhatsapp size={30} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;