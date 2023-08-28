import React from 'react'
import Crypto from '../assests/crypto-x.jpeg';
import SportP from '../assests/Sport-Planet.jpg';
 

const Trabajos = () => {


const handleWeb = () => {
        window.open("https://cryptoxapp.netlify.app/")
    };
    
    const handleCodigo = () => {
        window.open("https://github.com/alenm777/cryptoapp")
    };

    
    const handleWebDos = () => {
        window.open("https://sport-planet.vercel.app/")
    };

  const handleCodigoDos = () => {
        window.open("https://github.com/alenm777/SportPlanet/")
    };

  return (
    <div name='trabajos' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full items-center '>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Trabajos</p>
                <p className=' py-6'>// Vea algunos de mis trabajos</p>
            </div>

    {/* Container  */}        
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

    {/* Grid Item */}  
    <div
    style={{backgroundImage: `url(${Crypto})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >

        { /* Hover Effect */}
        <div className='opacity-0 group-hover:opacity-100' >
               <span className='text-2xl font-bold text-white tracking-wider  items-center'>
Crypto X App 
               </span>
                <div className='pt-8 text-center '>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleWeb} >Sitio Web</button>

    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleCodigo} >Codigo</button>
                </div>
            </div>
        </div>

        <div
    style={{backgroundImage: `url(${SportP})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >
        { /* Hover Effect */}
        <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-white tracking-wider'>
   Sport-Planet
               </span>
                <div className='pt-8 text-center '>

    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleWebDos}>Sitio Web
    </button>

    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleCodigoDos}>Codigo
    </button>

                </div>
            </div>
        </div>
          {/* Grid Item */}  
    <div
    style={{backgroundImage: `url(${Crypto})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >

        { /* Hover Effect */}
        <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-white tracking-wider'>
Crypto X App 
               </span>
                <div className='pt-8 text-center '>

    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleWeb}>Sitio Web</button>


    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleCodigo}>Codigo</button>

                </div>
            </div>
        </div>
        <div
    style={{backgroundImage: `url(${SportP})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >

        { /* Hover Effect */}
        <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-white tracking-wider'>
   Sport-Planet
               </span>
                <div className='pt-8 text-center '>

    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleWebDos}>Sitio Web
    </button>


    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleCodigoDos}>Codigo
    </button>

                </div>
            </div>
        </div>
          {/* Grid Item */}  
    <div
    style={{backgroundImage: `url(${Crypto})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >

        { /* Hover Effect */}
        <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-white tracking-wider'>
Crypto X App 
               </span>
                <div className='pt-8 text-center '>

    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleWeb}>Sitio Web</button>


    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleCodigo}>Codigo</button>

                </div>
            </div>
        </div>
        <div
    style={{backgroundImage: `url(${SportP})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >

        { /* Hover Effect */}
        <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-white tracking-wider'>
   Sport-Planet
               </span>
                <div className='pt-8 text-center '>

    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleWebDos}>Sitio Web
    </button>


    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleCodigoDos}>Codigo
    </button>

                </div>
            </div>
        </div>
    </div>
</div>
</div>

  )
}

export default Trabajos;