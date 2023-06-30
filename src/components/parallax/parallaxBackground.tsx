'use client'
import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

const ParallaxBackground = () => {
  return (
    <section className='w-[80%] h-full'>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image:
              'parallaxBG.webp',
              speed: -20
            }
          ]}
          className='h-full w-full rounded-sm shadow-lg filter grayscale'
        />
      </ParallaxProvider>
    </section>
  )
}

export default React.memo(ParallaxBackground)
