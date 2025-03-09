import React from 'react';
import TechComp from './techComp';
import AbilitiesCircle from './abilitiescircle';
import { abilities } from '@/libs';

export default function Habilidades() {
  return (
    <>
      <div className='w-full min-h-screen grid grid-cols-1 grid-rows-2 overflow-hidden'>
        <div className='h-full w-full'>
          <TechComp />
        </div>
        <div className='h-full min-h-screen w-full flex items-center justify-center'>
          <div className='h-full w-full md:w-3/5 flex flex-col'>
            <div className='w-full h-1/6 justify-center items-center text-white text-2xl md:text-3xl flex p-10'>
              {' '}
              Habilidades Blandas
            </div>
            <div className='w-full h-full grid grid-cols-2 grid-rows-2 place-items-center'>
              {abilities.map((a) => (
                <AbilitiesCircle
                  description={a.description}
                  color={a.color}
                  abilities={a.name}
                  id={a.name}
                  key={a.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
