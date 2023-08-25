import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const Inicio = () => {
  return (
    <div name="inicio" className='w-full h-screen bg-[#0a192f]'>
        
         {/* Container */}
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-pink-600 text-2xl ' > Hola, mi nombre es</p>
<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Alén Muñoz</h1>
<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy un Desarrollador <br/> Full Stack.</h2>
<p className='text-[#8892b0] py-4 max-w-[700px]'> Mi enfoque se centra en la creación y el diseño de experiencias digitales de calidad. Mi objetivo actual consiste en perfeccionar la construcción de aplicaciones web completas, combinando mis habilidades, aspiro a ofrecer soluciones integrales y atractivas.</p>
<div>
    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Vea mi trabajo
<span className='group-hover:rotate-90 duration-300'>
<HiArrowNarrowRight className='ml-3'/>
</span> 
 </button>
</div>
         </div>
    </div>
  )
}

export default Inicio