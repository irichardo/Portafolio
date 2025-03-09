import Link from 'next/link';

export default function LinkCustom(props: any) {
  const { href, children } = props;
  return (
    <Link
      href={href}
      className='text-blue-400 hover:text-blue-900'
      target='_blank'
    >
      {children}
    </Link>
  );
}
