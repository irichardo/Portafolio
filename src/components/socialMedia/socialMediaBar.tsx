import { BsLinkedin, BsGithub, BsMailbox } from "react-icons/bs";
import Link  from "next/link";

export default function SocialBar() {
  return (
    <nav className="fixed left-0 h-full w-[20vh] grid place-content-center gap-10">
        <Link href={'https://www.linkedin.com/in/richardhd/'} target="_blank">
        <BsLinkedin size={50} className="colorIcons transition-colors duration-400" />
        </Link>
        <Link href={'https://github.com/irichardo'} target="_blank">
        <BsGithub size={50} className="colorIcons transition-colors duration-400"/>
        </Link>
    </nav>
  );
}
