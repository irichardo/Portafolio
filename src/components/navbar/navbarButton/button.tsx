import Link from 'next/link'

type AutoCloseFunction = (event: any) => void;

interface buttonNav {
  automaticClosing: AutoCloseFunction;
  text: String;
  route: string;
}

export default function NavButton ({
  automaticClosing,
  text,
  route
}: buttonNav) {
  return (
    <li
      className='w-full h-20 duration-500 flex items-center justify-center
     border-r-red-100 hover:border-l-red-400 hover:border-t-[1px] hover:border-t-red-400
      hover:border-b-red-700 hover:border-l-[12px] hover:border-b-8 hover:border-r-[12px]
     hover:border-r-[#7c3939] box-border cursor-default transition-colors text-black font-light text-lg
     focus:bg-slate-300 active:bg-slate-300'
    >
      <Link
        className='w-full h-full justify-center items-center flex cursor-default'
        href={route}
        scroll={false}
        onClick={automaticClosing}
      >
        {text}
      </Link>
    </li>
  )
}
