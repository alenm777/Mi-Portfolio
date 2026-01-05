import React from 'react'
import Diseño from "../assests/Diseño-Web.png"
import JavaScript from "../assests/JavaScript-Data.png"
import Frontend from "../assests/FrontendLibrerias.png"
import Fullstack from "../assests/Full-Stack.png"

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        
        {/* Título */}
        <div className='max-w-[1000px] w-full grid grid-cols-4 gap-8'>
          <div className='col-span-4 sm:col-span-2 flex justify-center items-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre mí
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Creo soluciones digitales enfocadas en resolver problemas reales.
            </p>
          </div>

          <div className='sm:text-right pb-8 pl-4 mt-4 text-base'>
            <p>
              He participado en proyectos reales tanto en entornos profesionales
              como freelance, desarrollando aplicaciones web, plataformas de
              gestión y sitios orientados al rendimiento y la escalabilidad.
              <br /><br />
              Mi forma de trabajar se basa en comprender el problema, analizar
              la mejor solución técnica y construir funcionalidades claras,
              mantenibles y alineadas a los objetivos del negocio.
              
             
            </p>
          </div>
        </div>

        {/* Imágenes */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-8">
          
          <div className="hover:scale-110 duration-500">
            <img
              className='w-70 h-60 mx-auto hidden sm:block'
              src={Diseño}
              alt="Diseño Web"
            />
          </div>

          <div className='hover:scale-110 duration-500'>
            <img
              className='w-70 h-60 mx-auto hidden sm:block'
              src={JavaScript}
              alt="JavaScript"
            />
          </div>

          <div className='hover:scale-110 duration-500'>
            <img
              className='w-70 h-60 mx-auto hidden sm:block'
              src={Frontend}
              alt="Frontend"
            />
          </div>

          <div className='hover:scale-110 duration-500'>
            <img
              className='w-70 h-60 mx-auto hidden sm:block'
              src={Fullstack}
              alt="Full Stack"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About