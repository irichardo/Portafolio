import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

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
                <div className='absolute inset-0 flex items-center justify-center'>
                  {/* <h1 className='text-white font-semibold text-opacity-80 stroke-slate-950 relative z-10'> */}
                    {/* <span className=' text-white text-7xl sm:text-9xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '> */}
                           <div className='w-24 h-24 md:h-72 md:w-72 rounded-full bg-black' />
                    {/* </span> */}
                  {/* </h1> */}
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
