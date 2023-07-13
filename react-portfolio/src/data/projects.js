import chifaApp from '../images/chifa-app.PNG';
import gameApp from '../images/game-app.PNG'

import ctc from '../images/ctc.PNG';
import nike from '../images/nike.PNG';
import task from '../images/task.PNG';

import ecommerceBuke from '../images/ecommerceBuke.PNG'

import cuento1 from '../images/cuento1.PNG'
import cuento2 from '../images/cuento2.PNG'
import cuento3 from '../images/cuento3.PNG'

import crypto from '../images/crypto.PNG';
import dog from '../images/dog.PNG';
import tierra from '../images/tierra.PNG';
import blog from '../images/blog.PNG';


const projects = [
  
  {
    id:1,
    category: 'Fullstack',
    image: ecommerceBuke,
    link2: 'https://www.bukestore.com/',
    title: 'Buke Store Ecommerce',
    text: 'Proyecto profesional, Ecommerce completamente funcional para Buke Store (Hecho en MEVN).'
  },


  {
    id:2,
    category: 'Frontend',
    image: cuento1,
    link: 'https://github.com/JoacoMaurtua/New-Tale-Animations/tree/main/Liebre_y_Tortuga_NMotor',
    link2: 'https://vivaleer.matchlab.cl/previews/2022/liebre_tortuga_NMotor/v6/index.html',
    title: "Cuento Animado 'La Liebre y la Tortuga'",
    text: 'Proyecto profesional(freelance), Cuento animado hecho en html, css, js y la libreria GSAP 3.0'
  },

  {
    id:3,
    category: 'Frontend',
    image: cuento2,
    link: 'https://github.com/JoacoMaurtua/TaleAnimation/tree/main/el_flautista_de_hamelin_actualizado',
    link2: 'https://vivaleer.matchlab.cl//previews/2021/homologacion/flauta-v11/',
    title: "Cuento Animado 'El flautista de Hamelin'",
    text: 'Proyecto profesional(freelance), Cuento animado hecho en html, css, js y la libreria GSAP 3.0'
  },

  {
    id:4,
    category: 'Frontend',
    image: cuento3,
    link: 'https://github.com/JoacoMaurtua/TaleAnimation/tree/main/ricitos_de_oro_01',
    link2: 'https://vivaleer.matchlab.cl//previews/2021/homologacion/ricitos-v6/',
    title: "Cuento Animado 'Ricitos de Oro'",
    text: 'Proyecto profesional(freelance), Cuento animado hecho en html, css, js y la libreria GSAP 3.0'
  },

  
  {
    id:5,
    category: 'Frontend',
    image: chifaApp,
    link: 'https://github.com/JoacoMaurtua/ChifaPage',
    link2: 'https://chifa-kaiken.netlify.app/',
    title: 'Pagina de Chifa',
    text: 'Pagina de restaurante hecha en HTML,CSS y JS'
  },

 
  {
    id:6,
    category: 'Frontend',
    image: ctc,
    link: 'https://github.com/StefanoQuiroz/CTC',
    link2: 'https://ctc-demo-efdbf.web.app/',
    title: 'Pagina de cursos',
    text: 'Pagina de cursos creada en React.js para el test de una empresa.'
  },

  {
    id:7,
    category: 'Frontend',
    image: nike,
    link: 'https://github.com/JoacoMaurtua/3d-animated-card',
    link2:'https://parallaxshoes.firebaseapp.com/',
    title: 'Tarjeta en 3D!',
    text: 'Tarjeta de zapatilla nike air jordan creada con framer motion.'
  },

  {
    id:8,
    category: 'Fullstack',
    image: task,
    link: 'https://github.com/JoacoMaurtua/Complete-task-manager',
    link2:'http://18.224.96.131/',
    title: 'Task Manager',
    text: 'Aplicacion para crear tareas en MERN, se utilizo JWT para la autorizacion del user.'
  },


  {
    id:9,
    category: 'Frontend',
    image: crypto,
    link: 'https://github.com/JoacoMaurtua/Bitcoin-Cryptocurrency-',
    link2:'https://cryto-tracker.web.app/',
    title: 'Crypto Tracker',
    text: 'Aplicacion REST API que rastrea en tiempo real los datos de cryptomonedas.'
  },


  {
    id:10,
    category: 'Ideas Locas',
    image: nike,
    link: 'https://github.com/JoacoMaurtua/3d-animated-card',
    link2:'https://parallaxshoes.firebaseapp.com/',
    title: 'Tarjeta en 3D!',
    text: 'Tarjeta de zapatilla nike air jordan creada con framer motion.'
  },


  {
    id:11,
    category: 'Ideas Locas',
    image: gameApp,
    link: 'https://github.com/JoacoMaurtua/JS-Games/tree/master/ChewAdventure',
    link2:'https://chewadventure-7ddaf.web.app/',
    title: 'Chew Adventure',
    text: 'Juego simple utilizando js y html canvas, tematica de Star Wars!'
  },

  {
    id:12,
    category: 'Ideas Locas',
    image: dog,
    link: 'https://github.com/JoacoMaurtua/Sprite-Animation',
    link2:'https://dog-animation.web.app/',
    title: 'Perrito sprite',
    text: 'Animacion tipo juego que le da vida a un sprite utilizando JS.'
  },


  {
    id:13,
    category: 'Ideas Locas',
    image: tierra,
    link: 'https://github.com/StefanoQuiroz/Mundo-3D',
    link2:'https://mundo-three-d.web.app/',
    title: 'Planeta en 3D!',
    text: 'Animacion en 3d del planeta Tierra hecha en React.js con Three.js.'
  },
  

  {
    id:14,
    category: 'Fullstack',
    image: blog,
    link: 'https://github.com/JoacoMaurtua/El-PlusUltraBlog',
    link2:'https://el-plus-ultra-blog.vercel.app/',
    title: 'El PlusUltra Blog',
    text: 'Blog moderno real realizado con Next.js, Tailwind CSS y GraphQL',
  },
]

export default projects;