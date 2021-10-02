import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RamsPantoja</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerTitle_container}>
          <div className={styles.headerTitle}>
            <p>Bienvenido a:</p>
            <h1>RamsPantoja Portafolio.</h1>
          </div>
          <span>{'</>'}</span>
        </div>
        <div className={styles.waveContainer}>
          <Image src='/wave.svg' alt='wave' layout='fill' objectFit='cover'/>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMe_inf}>
            <h2>Sobre mí</h2>
            <p>Ingenierio mecánico y desarrollador full stack, desarrollado en el ámbito de diseño(mecánico) y web applications, respectivamente.</p>
            <p>Como desarollador web: Express.js, Node.js, ReactJs, NextJs, MongoDB & GraphQl.</p>
            <p>Amazon Web Services: EC2, Lambda, Amplify, API GATEWAY.</p>
            <p>Como ingeniero mecánico: Diseño mecánico, Inventor, Solidworks, Programacion PLC, y automatización.</p>
            <p>Me gusta aprender, y actualizarme para desarrollar habilidades que aporten soluciones a la industria.</p>
            <p>He desarrollado aplicaciones web y páginas web durante 2 años, haciendo uso de tecnologías web como lo son: ExpressJs, Node.js, GraphQL enfocadas en el Backend, y ReactJs, Next.js, MeterialUI enfocadas en el Frontend. Utilizando Javascript como lenguaje de principio a fin.</p>
            <p>Desarrollo e integración de REST-APIs, utilizando Express.js como servidor, y GraphQl(Apollo) como lenguaje query para la implementación de APIs.</p>
            <p>Apasionado por la tecnología e ingeniería.</p>
          </div>
          <div className={styles.bunny_tech}>
            <Image src='/coder.svg' alt='developer-icon' width={600} height={600}/>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2>Skills & Tecnologías</h2>
          <div className={styles.skills_set}>
            <div className={styles.skill_card}>
              <Image src='/javascript-icon.svg' alt='Javascript-icon' width={150} height={150}/>
              <p><a style={{color: '#f7f26e', textDecoration: 'underline'}} href='https://www.javascript.com/'>Javascript</a> es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.</p>
            </div>
            <div className={styles.skill_card}>
              <Image src='/react-icon.svg' alt='ReactJS-icon' width={150} height={150}/>
              <p><a href='https://reactjs.org/' style={{color: '#80deea', textDecoration: 'underline'}}>React</a> es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.</p>
            </div>
            <div className={styles.skill_card}>
              <Image src='/nodejs-icon.svg' alt='NodeJS-icon' width={150} height={150}/>
              <p><a href='https://nodejs.org/en/' style={{color: '#4caf50', textDecoration: 'underline'}}>Node.js</a> es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.</p>
            </div>
            <div className={styles.skill_card}>
              <Image src='/mongodb-icon.svg' alt='MongoDB-icon' width={150} height={150}/>
              <p><a href='https://www.mongodb.com/' style={{color: '#81c784', textDecoration: 'underline'}}>MongoDB</a> es un sistema de base de datos NoSQL, orientado a documentos y de código abierto.</p>
            </div>
            <div className={styles.skill_card}>
              <Image src='/expressjs-ar21.svg' alt='ExpressJS-icon' width={150} height={100}/>
              <p><a href='https://expressjs.com/' style={{color: '#ffffff', textDecoration: 'underline'}}>Express</a>, es un marco de aplicación web de back-end para Node.js, lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web y API.</p>
            </div>
            <div className={styles.skill_card}>
              <Image src='/graphql-icon.svg' alt='Graphql-icon' width={150} height={100}/>
              <p><a href='https://graphql.org/' style={{color: '#ff4081', textDecoration: 'underline'}}>GraphQL</a> es un lenguaje de consulta y manipulación de datos para APIs, y un entorno de ejecución para realizar consultas con datos existentes.</p>
            </div>
            <div className={styles.skill_card}>
              <Image src='/nextjs-icon.svg' alt='Nextjs-icon' width={150} height={100}/>
              <p><a href='https://nextjs.org/' style={{color: '#ffffff', textDecoration: 'underline'}}>Next.js</a> es un marco de desarrollo de código abierto construido sobre Node.js que permite funcionalidades de aplicaciones web basadas en React, como la representación del lado del servidor y la generación de sitios web estáticos.</p>
            </div>
            <div className={styles.skill_card}>
              <Image src='/git-icon.svg' alt='git-icon' width={150} height={100}/>
              <p><a href='https://git-scm.com/' style={{color: '#f4511e', textDecoration: 'underline'}}>Git</a> es un software de control de versiones, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.</p>
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          <h2>Proyectos</h2>
          <div className={styles.projects_set}>
            <div className={styles.projects_card}>
              <div className={styles.projects_cardImage}>
                <Image className={styles.projectImage} src='/profepaco_logo.png' alt='profe paco' layout='fill' objectFit='scale-down'/>
              </div>
              <div className={styles.project_inf}>
                <p className={styles.project_title}>Profe Paco</p>
                <p className={styles.project_description}>Proyecto Full Stack (MongoDB, ExpressJs, Next.js (React Framework), NodeJS & Apollo GraphQL).</p>
                <p className={styles.project_description}>
                  Aplicación web para vender y administrar los cursos vendidos a los usuarios. 
                  Se implemento Mercado Pago como pasarela de pago.
                </p>
                <span>Estado: Producción</span>
              </div>
            </div>
            <div className={styles.projects_card}>
              <div className={styles.projects_cardImage}>
                <Image className={styles.projectImage} src='/logotipo_maak.svg' alt='logo maak' layout='fill' objectFit='scale-down' />
              </div>
              <div className={styles.project_inf}>
                <p className={styles.project_title}>Maak</p>
                <p className={styles.project_description}>Proyecto Full Stack (MongoDB, ExpressJs, Next.js (React Framework), NodeJS & Apollo GraphQL, Cardano Blockchain).</p>
                <p className={styles.project_description}>
                  Plataforma NFT & Stake Pool basado en el blockchain CARDANO, creada para permitir que las personas delegen sus ADAs en el Pool 
                  y tambien desarrollen sus NFT´s de manera sencilla, asi puedan venderlos.
                </p>
                <span>Estado: Desarrollo</span>
              </div>
            </div>
            <div className={styles.projects_card}>
              <div className={styles.projects_cardImage}>
                <Image className={styles.projectImage} src='/IMAGOTIPO-blanco.svg' alt='logo maak' layout='fill' objectFit='scale-down' />
              </div>
              <div className={styles.project_inf}>
                <p className={styles.project_title}>R3D</p>
                <p className={styles.project_description}>Proyecto Full Stack (MySql, Spring Boot, Next.js (React Framework), Java, AWS services).</p>
                <p className={styles.project_description}>
                  Plataforma encargada de conectar a creadores y fabricantes, en la industria de la manufactura y diseño.
                </p>
                <span>Estado: Desarrollo</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.waveContainer}>
          <Image src='/wave-footer.svg' alt='wave' layout='fill' objectFit='cover'/>
        </div>
      </footer>
    </div>
  )
}
