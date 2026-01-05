import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contacto = () => {
  const ref = useRef()

  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const validateFields = () => {
    const newErrors = {}

    if (!name.trim()) newErrors.name = 'Ingrese su nombre'
    if (!email.trim()) {
      newErrors.email = 'Ingrese su email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Email inválido'
    }
    if (!message.trim()) newErrors.message = 'Ingrese un mensaje'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateFields()) return

    setSending(true)

    emailjs
      .sendForm(
        'service_sfepdo6',
        'template_ho1epwj',
        ref.current,
        'R9iNUA8LdZ2jS1A6e'
      )
      .then(() => {
        setSuccess(true)
        setSending(false)
        ref.current.reset()
        setName('')
        setEmail('')
        setMessage('')
        setErrors({})

        setTimeout(() => setSuccess(false), 4000)
      })
      .catch(() => {
        setSending(false)
      })
  }

  return (
    <div name='contacto' className='w-full min-h-screen bg-[#0a192f] flex justify-center px-6'>
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[600px] w-full pt-24'
      >
        {/* Header */}
        <div className='pb-10 text-center'>
          <h2 className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>
            Contacto
          </h2>
          <p className='text-gray-400 mt-6'>
            ¿Tenés un proyecto, una propuesta laboral o necesitás un desarrollador web?
            <br />
            Escribime y te respondo a la brevedad.
          </p>
        </div>

        {/* Nombre */}
        <input
          className='bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600'
          type="text"
          placeholder='Nombre'
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}

        {/* Email */}
        <input
          className='my-4 p-3 bg-[#ccd6f6] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600'
          type="email"
          placeholder='Email'
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

        {/* Mensaje */}
        <textarea
          className='bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600'
          name="message"
          rows="6"
          placeholder='Contame brevemente tu idea o propuesta'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}

        {/* Botón */}
        <button
          type="submit"
          disabled={sending}
          className={`text-white border-2 px-6 py-3 my-8 mx-auto rounded-lg transition duration-300
            ${sending
              ? 'opacity-60 cursor-not-allowed'
              : 'hover:bg-pink-600 hover:border-pink-600'
            }`}
        >
          {sending ? 'Enviando...' : 'Trabajemos juntos'}
        </button>

        {/* Success */}
        {success && (
          <div className='text-center text-green-400'>
            <p>Mensaje enviado correctamente. Te responderé pronto.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto mt-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </form>
    </div>
  )
}

export default Contacto