import React from 'react'
import {Tilt} from "react-tilt"
import {motion} from 'framer-motion'

import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text.[20px] font-bold text-center'>{title}</h3>


        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={ `${styles.sectionSubText}  leading-[30px] text-justify grid p-4 ` } >Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} leading-[30px] text-justify grid p-4 `}>Overview.</h2>
      </motion.div>

      <motion.p
        variants = {fadeIn("", "", 0.1, 1)} aling="center"
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify grid p-4"
      >
        Soy un ingeniero de software con experiencia en el desarrollo de aplicaciones web y móviles utilizando herramientas como React, Node.js, SQL Server, MySQL y Flutter. A lo largo de mi carrera, he trabajado en proyectos de desarrollo de software donde he aplicado estas tecnologías para crear soluciones innovadoras y funcionales. Además, como ingeniero de software, tengo un sólido conocimiento de los principios de desarrollo de software, incluyendo buenas prácticas de programación, diseño orientado a objetos y control de versiones. También estoy familiarizado con metodologías ágiles de desarrollo, lo que me permite adaptarme rápidamente a los cambios y colaborar eficientemente con equipos multidisciplinarios.

        Mi experiencia me ha permitido tener un enfoque analítico y estructurado en la resolución de problemas. Me gusta abordar los desafíos de manera metódica y encontrar soluciones eficientes que cumplan con los requisitos y las expectativas del proyecto.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index )=>(
          <ServiceCard key={service.title} index= {index} {...service} />
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")