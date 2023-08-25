import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from "../assests/logo1.png";
import {Link} from "react-scroll";

const NavBar = () => {
const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#400e5f80] text-gray-300'>
        <div>
<img src={Logo} alt='Logo imagen' style={{width: "250px"}} />
        </div>

        { /* menu  */}
       
<ul className='hidden md:flex'>
    <li>
    <Link to="inicio" smooth={true} duration={500} >
 Inicio
    </Link>
        </li>
    <li>
    <Link to="about" smooth={true} duration={500} >
 Acerca de mi
    </Link>
    </li>
    <li>
    <Link to="habilidades" smooth={true} duration={500} >
 Habilidades
    </Link>
    </li>
    <li>
    <Link to="trabajos" smooth={true} duration={500} >
 Trabajos
    </Link>
    </li>
    <li>
    <Link to="contacto" smooth={true} duration={500} >
 Contacto
    </Link>
    </li>
</ul>

{ /* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10'>
   {!nav ? <FaBars /> : <FaTimes />}
</div>


{/* Mobil menu */}
<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0c0f45] flex flex-col justify-center items-center'}>

<li className='py-6 text-4xl'>
<Link onClick={handleClick} to="inicio" smooth={true} duration={500} >
 Inicio
    </Link>
    </li>
    <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
 Acerca de mi
    </Link>
        </li>
    <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to="habilidades" smooth={true} duration={500} >
 Habilidades
    </Link>
        </li>
    <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to="trabajos" smooth={true} duration={500} >
 Trabajos
    </Link>
        </li>
    <li className='py-6 text-4xl'>
    <Link onClick={handleClick} to="contacto" smooth={true} duration={500} >
 Contacto
    </Link>
        </li>
</ul>


{/* Social icons  */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600' >
        <a className='flex justify-between items-center w-full text-gray-300'
         href="/">
            Linkedin <FaLinkedin size={30} />
        </a>
    </li>

    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]' >
        <a className='flex justify-between items-center w-full text-gray-300'
         href="/">
            GitHub <FaGithub size={30} />
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]' >
        <a className='flex justify-between items-center w-full text-gray-300'
         href="/">
           Curriculum <BsFillPersonLinesFill  size={30} />
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#45ac60]' >
        <a className='flex justify-between items-center w-full text-gray-300'
         href="/">
            Whatsapp <FaWhatsapp size={30} />
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c6495c]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
</ul>
</div>
    </div>  
  );
};

export default NavBar