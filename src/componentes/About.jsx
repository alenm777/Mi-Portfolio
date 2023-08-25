import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    <div className='sm:text-right pb-8 pl-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre Mi</p>
        </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola. Soy Alén Muñoz, encantado de conocerte. Por favor, echa un vistazo.</p>
            </div>
            <div>
              <p>Me apasiona crear soluciones que mejoren la experiencia de quienes las utilizan. Mi especialidad radica en desarrollar soluciones web.¿Qué harías si contaras con un experto en desarrollo web disponible para satisfacer tus necesidades? Esa es la propuesta que aspiro a ofrecerte.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About