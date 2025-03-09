import React from 'react';
import Image from 'next/image';

export default function Img(props: any) {
  const { src, alt, priority } = props;
  const priorityValidate = !!priority;
  return (
    <Image
      src={src}
      alt={alt}
      width={650}
      height={650}
      priority={priorityValidate}
      loading='lazy'
    />
  );
}
