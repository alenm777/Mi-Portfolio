import React from 'react'

import HTML from "../assests/html.png";
import CSS from '../assests/css.png';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png'
import Node from '../assests/node.png'
import Tailwind from '../assests/tailwind.png';
import Mongo from '../assests/mongo.png';
import Figma from '../assests/Figma.png';
import Postgrest from '../assests/postgres.png';
import Redux from '../assests/Redux.png';

const Habilidades = () => {
    return (
        <div name='habilidades' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          {/* Container */}
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
              <div>
                  <p className='text-4xl font-bold inline border-b-4 border-green-600  mx-auto'>Herramientas</p>
                  <p className='text-1xl font-bold py-6  '>Estas son las tecnologías con las que he trabajado.</p>
              </div>
    
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={HTML} alt="HTML logo" />
                      <p className='my-4'>HTML</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={CSS} alt="CSS logo" />
                      <p className='my-4'>CSS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                      <p className='my-4'>JAVASCRIPT</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={ReactImg} alt="React logo" />
                      <p className='my-4'>REACT</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Postgrest} alt="Postgrest icon" />
                      <p className='my-4'> POSTGREST</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                      <p className='my-4'>NODE JS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Mongo} alt="Mongo logo" />
                      <p className='my-4'>MONGO DB</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind logo" />
                      <p className='my-4'>TAILWIND</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Figma} alt="Figma logo" />
                      <p className='my-4'>FIGMA</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Redux} alt="Redux logo" />
                      <p className='my-4'>REDUX</p>
                  </div>
              </div>
          </div>
        </div>
      );
    };
export default Habilidades;