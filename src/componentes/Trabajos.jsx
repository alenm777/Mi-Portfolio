import React from 'react'
import Quiz from '../assests/quiz.png'
import RegistroGastos from '../assests/registro-gastos.png'
import Hotel from '../assests/hotelbediax.png'
import Cripto2 from '../assests/Cripto2.0.jpg'

const Trabajos = () => {

  const open = (url) => window.open(url, "_blank")

  const projects = [
    {
      title: "QuizAcierta",
      img: Quiz,
      web: "https://quiz-acierta.vercel.app/",
      code: "https://github.com/alenm777/QuizAcierta",
      desc: "Juego interactivo desarrollado en React"
    },
    {
      title: "Registro de Gastos",
      img: RegistroGastos,
      web: "https://registro-de-gastos.vercel.app",
      code: "https://github.com/alenm777/registro-de-gastos",
      desc: "Aplicación para registrar ingresos y gastos con autenticación y dashboard"
    },
    {
      title: "HotelBediaX",
      img: Hotel,
      web: "https://hotelbediax.vercel.app",
      code: "https://github.com/alenm777/hotelbediax",
      desc: "Sistema de gestión hotelera con panel administrativo"
    },
    {
      title: "Cripto 2.0",
      img: Cripto2,
      web: "https://criptoapp-8d713.web.app/",
      code: "https://github.com/alenm777/Criptoweb",
      desc: "Aplicación para consultar precios de criptomonedas en tiempo real"
    }
  ]

  return (
    <div name='trabajos' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-20'>
      <div className='max-w-[1100px] mx-auto px-6'>

        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold inline border-b-4 border-red-600'>
            Proyectos
          </h2>
          <p className='mt-6 text-gray-400'>
            Algunos de los proyectos que desarrollé de punta a punta
          </p>
        </div>

        {/* Grid */}
        <div className='grid sm:grid-cols-2 gap-8'>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${p.img})` }}
              className='relative h-[260px] rounded-xl bg-cover bg-center shadow-lg overflow-hidden group'
            >
              {/* Overlay */}
              <div className='absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-6'>
                <h3 className='text-2xl font-bold mb-3'>{p.title}</h3>

                <p className='text-sm text-gray-300 mb-6'>
                  {p.desc}
                </p>

                <div className='flex'>
                  <button
                    onClick={() => open(p.web)}
                    className='bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold 
                               mx-2 hover:bg-pink-600 hover:text-white transition duration-300'
                  >
                    Sitio Web
                  </button>

                  <button
                    onClick={() => open(p.code)}
                    className='bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold 
                               mx-2 hover:bg-pink-600 hover:text-white transition duration-300'
                  >
                    Código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Trabajos