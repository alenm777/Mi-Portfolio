import React from 'react'
import Diseño from "../assests/Diseño-Web.png"
import JavaScript from "../assests/JavaScript-Data.png"
import Frontend from "../assests/FrontendLibrerias.png"
import Fullstack from "../assests/Full-Stack.png"


const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300  '>
    <div className='flex flex-col justify-center items-center w-full h-full '>
<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
<div className='sm:text-center pb-8 pl-4 mx-auto'>
    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre Mi</p>
    </div>
      <div></div>
      </div>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold'>
          <p>Hola. Soy Alén Muñoz, encantado de conocerte. Por favor, echa un vistazo.</p>
        </div>
        <div className='sm:text-right pb-8 pl-4 mt-4'>
          <p>Me apasiona crear soluciones que mejoren la experiencia de quienes las utilizan. Mi especialidad radica en desarrollar soluciones. ¿Qué harías si contaras con un experto en desarrollo disponible para satisfacer tus necesidades? Esa es la propuesta que aspiro a ofrecerte.</p>  
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8">
        
      <div className=" hover:scale-110 duration-500">
            <img className='w-20 h-20 mx-auto ' src={Diseño} alt="Certificacion" />
          </div>

          <div className=' hover:scale-110 duration-500'>
            <img className='w-20 h-20 mx-auto ' src={JavaScript} alt="Certificacion" /> 
          </div>

          <div className=' hover:scale-110 duration-500'>
            <img className='w-20 h-20 mx-auto ' src={Frontend} alt="Certificacion" />
          </div>

          <div className=' hover:scale-110 duration-500'>
            <img className='w-20 h-20 mx-auto ' src={Fullstack} alt="Certificacion" />
          </div>
      </div>
    </div>
  </div>
  );
};

export default About