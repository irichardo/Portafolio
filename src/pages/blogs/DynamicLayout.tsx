import { useScroll } from 'framer-motion';
import { MdArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function Layout({ children }: { children: React.ReactNode }) {
  /* reading bar animation */
  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]);

  return (
    <main>
      <span className='w-full h-2 fixed flex items-center justify-center z-50'>
        <div
          className='transition-all ease-in-out delay-[0.5ms] h-full bg-red-400'
          style={{ width: `${hookedYPostion * 100}%` }}
        />
      </span>
      <div className='w-screen h-[12vh] bg-slate-800 flex items-center justify-center md:justify-start'>
        <Link
          href='/blogs'
          className='w-[20vh] h-1/2 font-chakra text-white items-center flex justify-center bg-slate-950 rounded-md'
        >
          <span className='block md:hidden'>Volver </span>
          <MdArrowBackIos className='hidden md:block' />
        </Link>
      </div>
      {children}
      <footer className='overflow-hidden text-center flex items-center justify-center bg-zinc-900 text-white text-xs sm:text-sm'>
        © Desarrollado con amor 💖 por &nbsp;
        <Link
          href='https://www.linkedin.com/in/richardhd/'
          className='flex items-center justify-center'
        >
          <span className='hover:text-blue-500 '>RichardHD</span>
          <FaLinkedin size={20} />
        </Link>
      </footer>
    </main>
  );
}
