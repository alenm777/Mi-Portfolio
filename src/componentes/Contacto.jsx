import React, { useState } from 'react';

const Contacto = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div
      name="contacto"
      className="w-full h-screen bg-[#0a192f] flex justify-center p-4"
    >
      <form
        action="https://formspree.io/f/mlgdvkaa"
        method="POST"
        onSubmit={() => setSuccess(true)}
        className="flex flex-col max-w-[600px] w-full pt-20"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300">
            Contacto
          </p>
          <p className="text-gray-300 text-lg py-6">
            Completá el formulario y me pondré en contacto a la brevedad
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2 rounded"
          type="text"
          name="name"
          placeholder="Nombre"
          required
        />

        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded"
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          className="bg-[#ccd6f6] p-2 rounded"
          name="message"
          rows="10"
          placeholder="Mensaje"
          required
        />

        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-6 py-3 my-8 mx-auto transition-all"
        >
          Trabajemos juntos
        </button>

        {success && (
          <p className="text-green-400 text-center text-lg">
            ✅ Mensaje enviado correctamente
          </p>
        )}
      </form>
    </div>
  );
};

export default Contacto;