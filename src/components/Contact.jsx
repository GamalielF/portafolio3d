import React from 'react'
import { useState, useRef } from 'react'
import {motion} from 'framer-motion';

import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const formRef = useRef();
  const [form, setFrom] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loaging, setLoaging] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFrom({...form, [name] : value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoaging(true);
    
    //r7BLpp9xU9gfZNFnu
    //template_pqcs2zq
    //service_ywz4w23

    emailjs.send('service_ywz4w23', 'template_pqcs2zq',{
      from_name: form.name,
      to_name: 'Fabio',
      from_email: 'gamaliel_mora@yahoo.com',
      message: form.message,
    },
    'r7BLpp9xU9gfZNFnu'
    )
    .then(()=>{
      setLoaging(false);
      alert('Gracias!, me comonicaré contigo lo antes posible 😊.');

      setFrom({
        name: '',
        email: '',
        message: '',
      })
    }, (error) =>{
      setLoaging(false)
      console.log(error);
      alert('Something went wrong.')
    } )
  }
    
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 2)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText} >Juntos, somos más fuertes. ¡Únete a nosotros y colabora para un futuro mejor!</p>
        <h3 className={styles.sectionHeadText} >Contacto.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu Nombre: </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='¿Cual es tu nombre?'    
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none border-cyan-800 font-medium'        
            />

          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu Email: </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='¿Cual es tu email?'    
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none border-cyan-800 font-medium'        
            />

          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Tu Mensage: </span>
            <textarea
              rows="7" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='¿Cuales son tus ideas?'    
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none border-cyan-800 font-medium'        
            />

          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary  rounded-xl'
          >
            {loaging ? 'Enviando...': 'Enviar'}
          </button>

        </form>

      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")