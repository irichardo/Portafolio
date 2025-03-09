import Main from '@/components/landing/landing';
import AboutMe from '@/components/aboutMe/page';
import Habilidades from '@/components/abilitesComp/abilities';
import Projects from '@/components/Projects/projects';
import ContactComp from '@/components/contactComp/contactComp';
import Layout from './layout';
// import { getPosts } from '@/libs/posts'

export default function Home() {
  return (
    <Layout>
      <main className='flex flex-col items-center justify-between overflow-hidden'>
        <section className='w-screen h-screen md:h-[80vh] relative' id='Inicio'>
          <Main />
        </section>
        <section
          className='w-screen h-screen flex items-center justify-center relative bg-gray-900 '
          id='About-me'
        >
          <AboutMe />
        </section>
        <section
          className='w-screen min-h-screen relative bg-gray-900'
          id='Habilidades'
        >
          <Habilidades />
        </section>
        <section
          className='w-screen h-screen relative bg-gray-900 '
          id='Proyectos'
        >
          <Projects />
        </section>
        <section
          className='w-screen h-screen relative bg-gray-900 items-center justify-center flex '
          id='Contacto'
        >
          <ContactComp />
        </section>
      </main>
    </Layout>
  );
}
