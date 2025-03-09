import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { AboutMeIndex } from './aboutParagraphIndex';
import { AiFillCloseSquare } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  const [viewerOpen, setViewer] = useState(false);

  // const cardVariants = {
  //   offscreen: {
  //     y: 100,
  //     rotate: 0,
  //   },
  //   onscreen: {
  //     y: 50,
  //     rotate: 0,
  //     transition: {
  //       type: "spring",
  //       bounce: 0.4,
  //       duration: 0.8,
  //     },
  //   },
  // };

  /**         HandlersCV               ***/

  const viewerHandler = () => {
    setViewer(!viewerOpen);
  };

  return (
    <div className=' w-full md:w-[80%] h-[80%] md:h-full items-center justify-center grid md:flex md:rounded-lg bg-gray-100'>
      {viewerOpen && (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          // className='w-screen h-screen bg-slate-900 flex items-center justify-center z-30 bg-opacity-50 fixed top-0'
        >
          <div className='w-full  md:w-1/3 min-h-full flex items-center justify-center relative'>
            <AiFillCloseSquare
              size='3rem'
              className='absolute right-0 top-[5vh] md:top-2 bg-gray-200 rounded-md cursor-pointer'
              onClick={viewerHandler}
            />
            {/* <button className="w-[5vh] h-[5vh] absolute right-0 top-5 bg-red-500 rounded-md" onClick={viewerHandler}>X</button> */}
            <Image src='/cv.png' width={700} height={600} alt='portafolio' />
          </div>
        </motion.div>
      )}
      {/* PORTRAIT  */}
      <div className='  md:w-1/3 h-full flex justify-center items-center'>
        <div className='w-full h-3/5 relative flex items-center justify-center'>
          <div className=''>
            <Image
              src='https://images.pexels.com/photos/430546/pexels-photo-430546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              width={400}
              height={400}
              alt='Intento'
            />
          </div>
        </div>
      </div>
      {/*            TEXT             */}
      <div className=' w-full md:w-1/2 h-full items-center flex flex-col justify-center'>
        <ul className='w-full h-[40vh] lg:h-5/6 desktopLarge:h-5/6 relative flex flex-col items-center justify-end text-xs md:text-base font-chakra md:shadow-inner shadow-slate-600'>
          <li className='w-[90%] h-2/3 p-4 mb-5 flex justify-center items-center font-semibold shadow-md shadow-gray-500 rounded-md bg-blue-100 flex-col'>
            <p className='overflow-y-auto h-full'>
              Hola soy Ricardo, mis amigos me dicen Richard! 💜 <br />
              Autodidacta empedernido. <br />
              Me gusta hacer cosas diferentes, entre el arte, la tecnologia y
              tambien la escritura!
              <br />
              Actualmente me busco un espacio en el mundo IT para poder
              continuar con mi crecimiento profesional. <br />
              Me encanta los espacios donde pueda comunicarme y entender al
              resto, asi como tambien aprender de todos y de ellos.
              <br />
              Mi meta principal costear mis estudios de ciberseguridad. 🎓
              <br />
              Mi filosifia de vida es:{' '}
              <span className='w-full '>
                Cuando todos remamos el barco hacia la misma direccion, es menos
                tiempo el que nos tomara culminar el camino.
              </span>
            </p>
          </li>
        </ul>
        <div className='w-full md:w-full md:h-2/6  flex items-center justify-center relative text-xs md:text-base font-chakra'>
          <Link
            className=' w-[40%] sm:w-[30%] h-1/2 md:w-[20vh] md:h-[5vh] bg-pink-700 text-white text-center justify-center flex items-center m-5 z-20 shadow-sm shadow-gray-950 hover:shadow-none transition-shadow rounded-lg'
            href='/pdf/cvform.pdf'
            target='_blank'
            download
          >
            DESCARGAR CV
          </Link>
          <button
            onClick={viewerHandler}
            className='w-[40%] sm:w-[30%] h-1/2 md:w-2/5 md:h-[5vh] bg-pink-700 text-white text-center justify-center flex items-center m-5 z-20 shadow-sm shadow-gray-950 hover:shadow-none transition-shadow rounded-lg'
          >
            VER CV
          </button>
        </div>
      </div>
    </div>
  );
}
