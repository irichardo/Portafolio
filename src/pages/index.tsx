import Main from '@/components/mainComp/main'
import AboutMe from '@/components/aboutMe/page'
import Habilidades from '@/components/abilitesComp/habilidades'
import Projects from '@/components/Projects/projects'
import ContactComp from '@/components/contactComp/contactComp'
import Layout from './layout'

export default function Home () {
  return (
    <Layout>
    <div className={`flex flex-col items-center justify-between overflow-hidden`}>
      <section className='w-screen h-screen relative' id='Home'>
        <Main />
      </section>
      {/* <section className='w-screen h-screen flex items-center justify-center relative bg-gray-900 ' id='About'>
        <AboutMe />
      </section>
      <section className='w-screen h-screen relative bg-gray-900' id='Habilidades'>
        <Habilidades />
      </section>
      <section className='w-screen h-screen relative bg-gray-900 ' id='Proyectos'>
        <Projects />
      </section>
      <section className='w-screen h-screen relative bg-gray-900 ' id='Contacto'>
        <ContactComp />
      </section> */}
    </div>
    </Layout>
  )
}
