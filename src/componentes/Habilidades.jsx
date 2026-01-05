import React from "react";

// Frontend
import HTML from "../assests/html.png";
import CSS from "../assests/css.png";
import JavaScript from "../assests/javascript.png";
import ReactImg from "../assests/react.png";
import Redux from "../assests/Redux.png";
import Tailwind from "../assests/tailwind.png";

// Backend
import Node from "../assests/node.png";
import Express from "../assests/express-js.png";
import Postgres from "../assests/postgres.png";

// CMS / SEO
import WordPress from "../assests/wordpress.png";
import SEO from "../assests/seo.png";

// Automatizaciones
import N8N from "../assests/n8n.png";
import GoHighLevel from "../assests/gohighlevel.png";

const SkillCard = ({ img, title }) => (
  <div className="shadow-md shadow-[#0f2a44] hover:scale-110 duration-500 rounded-lg p-4">
    <img className="w-20 mx-auto" src={img} alt={title} />
    <p className="my-4 font-semibold">{title}</p>
  </div>
);

const Habilidades = () => {
  return (
    <div
      name="habilidades"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">

        {/* TÍTULO */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Habilidades
          </p>
          <p className="py-6 text-gray-400">
            Tecnologías y herramientas que utilizo para desarrollar soluciones
            web, automatizaciones y sistemas orientados a resultados.
          </p>
        </div>

        {/* FRONTEND */}
        <section className="mt-6">
          <h3 className="text-2xl font-bold mb-4 text-pink-500">
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <SkillCard img={HTML} title="HTML" />
            <SkillCard img={CSS} title="CSS" />
            <SkillCard img={JavaScript} title="JavaScript" />
            <SkillCard img={ReactImg} title="React" />
            <SkillCard img={Redux} title="Redux" />
            <SkillCard img={Tailwind} title="Tailwind" />
          </div>
        </section>

        {/* BACKEND */}
        <section className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-pink-500">
            Backend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <SkillCard img={Node} title="Node.js" />
            <SkillCard img={Express} title="Express.js" />
            <SkillCard img={Postgres} title="PostgreSQL" />
          </div>
        </section>

        {/* WORDPRESS & SEO */}
        <section className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-pink-500">
            WordPress & SEO
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <SkillCard img={WordPress} title="WordPress" />
            <SkillCard img={SEO} title="SEO On-Page" />
          </div>
        </section>

        {/* AUTOMATIZACIONES */}
        <section className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-pink-500">
            Automatizaciones
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <SkillCard img={N8N} title="N8N" />
            <SkillCard img={GoHighLevel} title="GoHighLevel" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Habilidades;