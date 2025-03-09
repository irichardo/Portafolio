import React from 'react';

export default function H2({ children }: { children?: React.ReactNode }) {
  return (
    <h2 className='w-[90%] p-4 sm:p-10 sm:w-[80%] text-white text-base sm:text-2xl font-montserrat font-bold text-center sm:text-start'>
      {children}
    </h2>
  );
}
