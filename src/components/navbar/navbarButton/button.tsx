import Link from "next/link";
import { Variants, motion } from "framer-motion";

type AutoCloseFunction = (event: any) => void;

interface buttonNav {
  automaticClosing: AutoCloseFunction;
  text: String;
  route: string;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function NavButton({
  automaticClosing,
  text,
  route,
}: buttonNav) {
  return (
    <motion.li
         initial={{background:'white',scale:0.9}}
        //  whileFocus={{scale:1, backgroundColor:'black', color:'white'}}
         whileTap={{scale:1, backgroundColor:'black', color:'white'}}
         whileHover={{scale:1, }}
        //  transition={{ease:'easeInOut'}}
         className="p-4 "
    //   className='w-full p-2 h-[10vh] duration-500 flex items-center justify-center
    //  border-r-red-100 hover:border-l-red-400 hover:border-t-[1px] hover:border-t-red-400
    //   hover:border-b-red-700 hover:border-l-[12px] hover:border-b-8 hover:border-r-[12px]
    //  hover:border-r-[#7c3939] box-border cursor-default transition-colors text-black
    //  focus:bg-slate-300 active:bg-slate-300'
    >
      <Link
        className="w-full h-full justify-center items-center flex cursor-default p-4 overflow-hidden text-lg"
        href={route}
        onClick={automaticClosing}
      >
        {text}
      </Link>
    </motion.li>
  );
}
