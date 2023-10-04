import React from 'react'
import Quiz from '../assests/quiz.png';
import SportP from '../assests/Sport-Planet.jpg';
import Game from "../assests/Gameratings.jpg";
import Cripto2 from  '../assests/Cripto2.0.jpg'



const Trabajos = () => {


const handleWeb = () => {
        window.open("https://quiz-acierta.vercel.app/")
    };
    
    const handleCodigo = () => {
        window.open("https://github.com/alenm777/QuizAcierta")
    };

    
    const handleWebDos = () => {
        window.open("https://sport-planet.vercel.app/")
    };

  const handleCodigoDos = () => {
        window.open("https://github.com/alenm777/SportPlanet/")
    };

    const handleWebTres = () => {
        window.open("https://gameratings.vercel.app/")
    };

const handleCodigoTres = () => {
        window.open("https://github.com/alenm777/GameRatings")
    };

    const handleWebFour = () => {
        window.open("https://criptoapp-8d713.web.app/")
    };

    const handleCodigoFour = () => {
        window.open("https://github.com/alenm777/Criptoweb")
    };





  return (
    <div name='trabajos' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w[100px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20'>
            <div className='sm:text-center pb-8 pl-4 mx-auto'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600 '>Trabajos</p>
                <p className=' text-1xl font-bold py-6'> Vea mis trabajos</p>
            </div>   
<div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

    <div
    style={{backgroundImage: `url(${Quiz})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >
        <div className='opacity-0 group-hover:opacity-100' >
               <span className='text-2xl font-bold text-white tracking-wider  items-center'>
QuizAcierta
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
 
    <div
    style={{backgroundImage: `url(${Game})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >
        <div className='opacity-0 group-hover:opacity-100'>
               <span className='text-2xl font-bold text-white tracking-wider'>
Gameratings
               </span>
                <div className='pt-8 text-center '>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleWebTres}>Sitio Web</button>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleCodigoTres}>Codigo</button>
                </div>
            </div>
        </div>
      
        <div
    style={{backgroundImage: `url(${Cripto2})`}}  className='shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div'
    >
        <div className='opacity-0 group-hover:opacity-100' >
               <span className='text-2xl font-bold text-white tracking-wider  items-center'>
Cripto 2.0
               </span>
                <div className='pt-8 text-center '>
    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleWebFour} >Sitio Web</button>

    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={handleCodigoFour} >Codigo</button>
                </div>
            </div>
        </div>


    </div>
</div>
</div>

  )
}

export default Trabajos;