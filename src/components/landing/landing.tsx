import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import  Image from 'next/image'
import { useMediaQuery } from 'react-responsive'


export default function main() {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [hideOnMobile, setHideOnMobile] = useState(false);
  useEffect(() => {
    setHideOnMobile(isMobile);
  }, [isMobile]);


  return (
    //MOBILE
    <div className='w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden'>
      <div className='w-full md:w-5/6 h-full flex justify-center items-center'>
        {
          // {/*    Logo       */}
          hideOnMobile ?
            <div className='w-full h-full flex flex-col items-center justify-center' >
              <div className='w-full h-1/2 items-center justify-center flex'>
                <motion.div key={'LogoMobile'} initial={{opacity:0}} animate={{opacity: 1, borderRadius:["0%", "0%", "5%", "5%"]}} transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }} className='w-[90%] h-[90%] items-center justify-center flex bg-rose-600  text-white text-3xl'>
                <Image src='/logonobg.svg' width={600} height={600} alt = 'RicharHD personal branding' loading='lazy'/>
                </motion.div>
              </div>
              {/* text  */}
              <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                <motion.h1 key={'titleMobile'} initial={{x:-200,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:2,delay:0.5, ease:'easeInOut'}}  className='p-2 text-3xl font-montserrat font-bold text-orange-300'>RichardHD</motion.h1>
                <h2 className={`p-2 transition-all text-3xl font-montserrat font-bold text-orange-300 `}>Desarrolador web</h2>
              </div>
            </div>
            :
            // DESKTOP
            <div className='w-full h-4/6 rounded-lg justify-center flex-col items-center relative hidden md:flex'>
              <div className='w-full h-4/5 items-center flex font-chakra text-9xl text-gray-50'>
              <motion.div
              key={'Logo Desktop'}
              initial={{
                x:-50,
                opacity:0
              }}
              animate={{
                opacity:1,
                x:50,
                borderRadius: ["0%", "0%", "0%", "2%", "2%"]
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 1, 0.5, 0.4, 1]
              }} 
              className={`w-[50vh] h-[50vh]  bg-rose-600 items-center flex justify-start`}>
              <Image src='/logonobg.svg' width={600} height={600} alt = 'RicharHD personal branding' loading='lazy'/>
              </motion.div>
                <motion.h1
                key={'tittle'}
                  aria-describedby='RichardHD Desarrollador WEB'
                  className="box sm:text-4xl md:text-6xl lg:text-9xl"
                  initial={{ x: 500, scale: 0.5 }}
                  animate={{ x:100, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  RichardHD
                  {/* 
                  &nbsp;<motion.div className={`${test ? 'neonText' : ''}`} initial={{ color: 'white', scale: 1 }} animate={{ x: 50, scale: 1.3 }} transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }} onAnimationComplete={changeStyleTittle}>HD</motion.div> */}
                </motion.h1>
                </div>
              <motion.h2
              key={'subtitle'}
                className="text-orange-300 text-2xl flex items-center relative font-chakra tracking-widest"
                initial={{ x: 500, scale: 1 }}
                animate={{ x: 150, y: -100, scale: 1.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                Web developer
              </motion.h2>
            </div>
        }
      </div>
    </div>
  )
}
