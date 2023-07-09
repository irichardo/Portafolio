import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'



export default function main() {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [test, setTest] = useState(false)
  const changeStyleTittle = () => {
    setTest(true)
  }

  const [hideOnMobile, setHideOnMobile] = useState(false);
  useEffect(() => {
    setHideOnMobile(isMobile);
  }, [isMobile]);


  return (
    <div className='w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden'>
      <div className='w-full md:w-5/6 h-full flex justify-center items-center'>
        {
          // {/*    Logo       */}
          hideOnMobile ?
            <div className='w-full h-full flex flex-col' >
              <div className='w-full h-1/2 items-end justify-center flex'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }} className='w-[30vh] h-[30vh] items-center justify-center flex bg-black rounded-full text-white text-3xl'>
                  RHD
                </motion.div>
              </div>
              {/* text  */}
              <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                <h1  className='p-2 text-3xl font-montserrat font-bold text-orange-300'>RichardHD</h1>
                <h2 className='p-2 text-3xl font-montserrat font-bold text-orange-300'>Desarrolador web</h2>
              </div>
            </div>
            :
            <div className='w-full h-4/6 rounded-lg justify-center flex-col items-center relative hidden md:flex'>
              <div className='w-5/6 h-4/5 items-center flex font-chakra text-9xl text-gray-50'>
                <motion.h1
                  aria-describedby='Richard HD Desarrollador WEB'
                  className="box flex"
                  initial={{ x: 0, scale: 0.5 }}
                  animate={{ x: 400, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                  }}
                >
                  Richard&nbsp;<motion.div className={`${test ? 'neonText' : ''}`} initial={{ color: 'white', scale: 1 }} animate={{ x: 50, scale: 1.3 }} transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }} onAnimationComplete={changeStyleTittle}>HD</motion.div>
                </motion.h1>
              </div>
              <motion.h2
                className="w-4/5 h-2/5 text-orange-300 text-xl"
                initial={{ x: 0, scale: 1 }}
                animate={{ x: 500, scale: 1.2 }}
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
