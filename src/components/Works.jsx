import React from 'react'
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, play } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link, source_demo_link}) =>{
  return (
    <motion.div variants={fadeIn("up","spring", index *0.5, 0.75)}>
      <Tilt
        options={{
          max:45,
          scale: 1,
          speed: 450

        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={()=> window.open
                (source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                
                />

              </div>
              <div
                onClick={()=> window.open
                (source_demo_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={play}
                  alt='demo'
                  className='w-1/2 h-1/2 object-contain'
                
                />

              </div>
          </div>

        </div>
        
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
        
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))

          }

        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={ `${styles.sectionSubText}  leading-[30px] text-justify grid p-4 ` } >Mi Trabajo.
        </p>
        <h2 className={`${styles.sectionHeadText} leading-[30px] text-justify grid p-4 `}>Proyectos.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","", 0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-exl leading-[30px] text-justify'
        >
          Conoce mis proyectos, los cuales están documentados en mi repositorio digital, donde encontrarás una amplia variedad de trabajos. Hoy, me gustaría destacar algunos de los más sobresalientes hasta la fecha. Sin embargo, es importante mencionar que siempre estoy trabajando en nuevas metas para enriquecer mi conocimiento y mejorar mis habilidades como desarrollador de software.
          !! Te invito a explorar mi repositorio digital y conocer más sobre mis proyectos. Agradezco cualquier comentario, sugerencia o pregunta que puedas tener. Gracias por tu atención y por tu interés en conocer mis proyectos. ¡Espero que encuentres inspiración y valor en lo que he logrado hasta ahora, y que te entusiasme acompañarme en mi viaje hacia nuevas metas y desafíos!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index)=>(
          <ProjectCard key={`project-${index}`} 
          index={index}
          {...project}
          />
        ))

        }

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");