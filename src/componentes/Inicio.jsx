import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Inicio = () => {
  const handleDownloadPDF = () => {
    const urlPdf = "/Alen_Muñoz_Desarrollador_Web_Full_Stack.pdf";
    const a = document.createElement("a");
    a.href = urlPdf;
    a.download = "Alen_Muñoz_Desarrollador_Web_Full_Stack.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div name="inicio" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        
        <p className="text-pink-600 text-2xl">
          Hola, mi nombre es
        </p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Alén Muñoz
        </h1>

        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          Desarrollador Web Full Stack
        </h2>

        <p className="text-[#8892b0] py-6 max-w-[700px]">
          Desarrollador Web Full Stack con experiencia profesional en React,
          Node.js y WordPress. He trabajado en proyectos productivos y freelance
          desarrollando aplicaciones web, sitios optimizados en rendimiento y
          SEO, e integraciones con APIs y herramientas de marketing digital.
          <br /><br />
          Me especializo en frontend moderno, optimización de performance y
          creación de soluciones escalables que mejoran la experiencia de
          usuario y la conversión.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link to="trabajos" smooth duration={500}>
            <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Ver proyectos
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>

          <button
            onClick={handleDownloadPDF}
            className="text-white border-2 px-6 py-3 hover:bg-[#112240]"
          >
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;