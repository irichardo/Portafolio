import React, { useEffect } from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import {motion} from 'framer-motion'

const ParallaxBackground = () => {


  return (
    <section className='w-full h-full'>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image:
              'catdesktop.gif',
              speed: 10
            },
            {
              speed: 0,
              children: (
                <div className='absolute inset-0 flex items-center justify-center '>
                  {/* logo animation */}
                <motion.div   className="w-44 h-44 sm:h-56 sm:w-56 md:h-64 md:w-64 bg-gray-950 flex items-center justify-center text-3xl text-white"
                animate={{
                  scale: [1, 1.2, 1.2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "0%", "50%", "50%"]
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1]
                }}>
                  RHD
                </motion.div>
                  </div>
              ),
            }
          ]}
          className='h-full w-full'
        />
      </ParallaxProvider>
    </section>
  )
}

export default React.memo(ParallaxBackground)
