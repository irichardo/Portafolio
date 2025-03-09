import React, { LiHTMLAttributes } from 'react';

export default function Li(props: LiHTMLAttributes<ChildNode>) {
  const { children } = props;

  return (
    <li className='font-roboto text-white text-xs sm:text-base '>
      ✅{children}
    </li>
  );
}
