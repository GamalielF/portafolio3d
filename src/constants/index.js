import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Computer Technician",
    company_name: "Disys Technical Solutions",
    icon: web,
    iconBg: "#383E56",
    date: "Abril 2019 - Febrero 2020",
    points: [
      "En mi experiencia laboral como técnico informático, fui responsable del mantenimiento y soporte de los sistemas informáticos de la empresa.",
      "Mis tareas incluían la reparación de hardware y software, la configuración y actualización de sistemas, la gestión de redes y la instalación de nuevos equipos.",
      "Además, trabajé en estrecha colaboración con el equipo de desarrollo de software para garantizar la integración eficiente de los sistemas de TI con las aplicaciones desarrolladas",
    ],
  },
  {
    title: "Community Manager",
    company_name: "Interplast",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Como Community Manager, era responsable de administrar y mantener la presencia en línea de la empresa en varias plataformas sociales.",
      "Obtuve una comprensión profunda de cómo funcionan las plataformas en línea, lo que me ayudó a comprender mejor cómo funcionan las aplicaciones y los sistemas web.",
      "Adquirí valiosas habilidades de análisis de datos, que son muy útiles en el desarrollo de software.",
      "Al monitorear las redes sociales, aprendí cómo recopilar y analizar datos y cómo presentar resultados de manera eficiente y a comunicar efectivamente con diferentes audiencias.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "academlo",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      "Implementación de un diseño receptivo y garantía de la compatibilidad entre navegadores.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "GAD GUARANDA",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "En mi rol como desarrollador móvil en, fui responsable del diseño, desarrollo y mantenimiento de aplicaciones móviles para sistemas operativos Android.",
      "Adquirí habilidades técnicas en lenguajes de programación como Java y Kotlin para Android y Dart para Flutter.",
      "Fui responsable de liderar el desarrollo de algunas de las aplicaciones.",
      "	Aprendí a trabajar con bases de datos y lenguajes de consulta enfocados en desarrollo móvil como SQLite.",
      "Utilicé Firebase para implementar funciones importantes en nuestras aplicaciones, como autenticación de usuario, almacenamiento de datos en la nube, notificaciones push y seguimiento de análisis.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "Uso componentes reutilizables de React para construir una interfaz de usuario moderna y atractiva además del uso de Tailwindcss para estilos personalizables.Cuenta con una página de inicio que presenta una variedad de productos destacados y una barra de navegación que permite a los usuarios buscar productos por categoría. Consumo de API de productos electrónicos desarrollada en nodejs para simular una tienda online con protección de rutas y autenticación de usuarios",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/GamalielF/thestore",
    source_demo_link: "https://thestorebuy.netlify.app/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    source_demo_link: "https://app.netlify.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    source_demo_link: "https://app.netlify.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
