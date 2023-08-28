import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';


const Contacto = () => {
    const ref = useRef();
    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newErrors = {};
      if (name.trim() === '') {
        newErrors.name = 'Este campo es obligatorio';
      }
  
      if (email.trim() === '') {
        newErrors.email = 'Este campo es obligatorio';
      }
  
      if (message.trim() === '') {
        newErrors.message = 'Este campo es obligatorio';
      }
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setSuccess(false); 
        return;
      }
  
      emailjs
        .sendForm(
          'service_sfepdo6',
          'template_ho1epwj',
          ref.current,
          'R9iNUA8LdZ2jS1A6e'
        )
        .then(result => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            ref.current.reset();
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
          }, 3000);
        })
        .catch(error => {
          setSuccess(false);
          setErrors({});
        });
    };

  return (
    <div name='contacto' className='w-full h-screen bg-[#0a192f] flex justify-center p-4'>
        <form  ref={ref} onSubmit={handleSubmit}  className='flex flex-col max-w-[600px] w-full mt-20'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300'>Contacto</p>
                <p className='text-gray-300 text-1xl font-bold py-6'>Complete el siguiente formulario y me pondre en contacto con usted </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre'
            name="name" value={name} onChange={e => setName(e.target.value)} />
 {errors && <span className="text-red-500 text-sm mb-2">{errors.name}</span>}

            <input className='my-4 p-2 bg-[#ccd6f6] '  type="email" placeholder='Email'
            name="email" value={email} onChange={e => setEmail(e.target.value)} />
            {errors  && <span className="text-red-500 text-sm mb-2">{errors.email}</span>}

            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mensaje'   value={message} onChange={e => setMessage(e.target.value)} />
            {errors && <span className="text-red-500 text-sm mb-2">{errors.message}</span>}
            
            <button type="submit" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'  disabled={Object.keys(errors).length > 0}>Trabajemos Juntos</button>
            <p className='text-gray-300 py-4 text-center text-lg'  >
          {success && "Su mensaje ha sido enviado. Me pondré en contacto con usted a la brevedad"}
        </p>
        {success && (
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500 mx-auto items-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        )}
        

        </form>
    </div>
  )
}

export default Contacto