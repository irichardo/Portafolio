export default function AboutMe() {
  return (
    <>
      <div className='w-[80%] h-5/6 bg-slate-100 flex  rounded-lg overflow-hidden'>

        <div className='w-4/6 h-full  flex items-center justify-center'>
          <div className='w-5/6 h-2/3'>
            <div className='w-full h-4/6'>
              <p className='w-full h-full flex flex-col items-center text-center font-semibold'>
                Hola!, mi nombre es Ricardo, mis amigos me suelen llamar 'Richard'.<br/>
                Desarrollador web en crecimiento.<br/>
                He trabajado en varios proyectos independientes,
                me encanta aprender cosas nuevas, equivocarme, recibir feedback y ponerme a prueba con cada conocimiento que obtengo, como este portafolio/devblog!, 
                he tenido a mi cargo mas de 4 personas en mas de una ocasion
                y los resultados han sido excelentes. Actulamente mi meta es encontrarme un lugar en una empresa enfocada en el mundo IT que me de la oportunidad de desarrollarme, pero,
                igualmente estoy disponible para cualquier proyecto freelance.<br/> Mi objetivo principal es poder costearme mis estudios de ciberseguridad 💜. <br/><span className="text-red-500 animate-bounce delay-700 m-4 text-xl">Muchas gracias por tu tiempo.</span> 
              </p>
            </div>
            <div className='w-full h-2/6  flex justify-center relative'>
              <button className='w-2/5 h-[5vh] bg-pink-700 text-white text-center justify-center flex items-center m-5 z-20 shadow-md shadow-slate-600 hover:shadow-none transition-shadow rounded-lg'>
                DESCARGAR CV
              </button>
            </div>
          </div>
        </div>
        <div className='w-2/6 h-5/6 flex items-center justify-center relative'>
          <div className='h-[50vh] w-5/6 bg-white' />
          <div className='h-[50vh] w-5/6  border-black border absolute z-10 top-[12vh] right-[3vh]' />
        </div>
      </div>

    </>
  )
}
