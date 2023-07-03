export default function AboutMe () {
  return (
    <>
      <div className='w-[80%] h-5/6 bg-slate-100 flex  rounded-lg overflow-hidden'>

        <div className='w-4/6 h-full  flex items-center justify-center'>
          <div className='w-5/6 h-1/2'>
            <div className='w-full h-4/6 '>
              <p className='w-full h-full grid items-center text-center'>
                Maecenas consequat libero urna, sit amet aliquam ex auctor commodo.
                Praesent pellentesque tempor nisl a tempor. Praesent dolor erat, egestas non
                cursus id, scelerisque vitae turpis. Sed congue ligula ante, vitae gravida enim viverra fringilla.
                Integer vitae lacinia quam, et pretium augue. Sed lacinia a mi non congue. Sed sed aliquam nibh,
                a tincidunt sapien. Donec placerat massa id urna gravida, a blandit ante elementum. Nulla sit
                amet velit sed elit tempus dapibus id vitae purus.
              </p>
            </div>
            <div className='w-full h-2/6  flex justify-center relative'>
              <button className='w-2/5 h-[5vh] bg-pink-800 text-white text-center justify-center flex items-center m-5 z-20'>
                <div className='w-2/5 h-[5vh] bg-pink-600 absolute right-1/3 top-2 z-10 flex items-center justify-center '>
                  DESCARGAR CV
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='w-2/6 h-5/6 flex items-center justify-center relative'>
          <div className='h-[50vh] w-5/6 bg-white' />
          <div className='h-[50vh] w-5/6  border-black border absolute z-10 top-[20vh] right-[3vh]' />
        </div>
      </div>

    </>
  )
}
