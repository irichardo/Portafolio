import { useState } from "react";
import sectionRoutes from "./index";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NavButton from "./navbarButton/button";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";
import ChangeButton from "./stateChangeButton/button";
import { useRouter } from "next/router";

export default function Navbar() {
  const Router = useRouter()
  const [listOpen, setListOpen] = useState(Router.asPath !== '/#Home'?false:true);
  const [actualPath, setActualPath] = useState("");
  const { Abilities, Home, About, Contact, Projects, DevBlog } = sectionRoutes;
  const changeListStatus = () => {
    setListOpen(!listOpen);
  };

  const autoClose = (event: any) => {
    //next.js don't let me use useRoute form next/router, and this is my actual solution
    let actualSection = event.target.href?.split("/")[3];
    setActualPath(actualSection);
    if (actualPath !== actualSection)
      setTimeout(() => {
        setListOpen(false);
      }, 700);
  };

  return (
    <>
      <div
        className={`w-[30vh] h-full bg-red-800 fixed z-50 grid items-center ${
          listOpen ? "" : "deactivate"
        } animationNavbar`}
      >
        <button
          className={`w-[10vh] h-[10vh] bg-gray-950 absolute top-[45vh] rounded-full flex items-center ${
            listOpen ? "justify-center left-[25vh]" : "justify-end left-[26vh]"
          } transition-transform`}
          onClick={() => changeListStatus()}
        >
          {listOpen ? (
            <MdKeyboardArrowLeft size={"4rem"} color="white" />
          ) : (
            <MdKeyboardArrowRight size={"4rem"} color="white" />
          )}
        </button>
        <ul>
          <NavButton
            automaticClosing={autoClose}
            text={Home.name}
            route={Home.route}
          />
          <NavButton
            automaticClosing={autoClose}
            text={About.name}
            route={About.route}
          />
          <NavButton
            automaticClosing={autoClose}
            text={Abilities.name}
            route={Abilities.route}
          />
          <NavButton
            automaticClosing={autoClose}
            text={Projects.name}
            route={Projects.route}
          />
          <NavButton
            automaticClosing={autoClose}
            text={Contact.name}
            route={Contact.route}
          />
            <NavButton
            automaticClosing={autoClose}
            text={DevBlog}
            route={'blogs'}
          />
          <li className="w-full h-24 flex items-center justify-around ">
            <Link href={"https://github.com/irichardo"} target="blank">
              <FaGithub size={"2.5em"} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/richardhd/"}
              target="blank"
            >
              <FaLinkedin size={"2.5em"} />
            </Link>
            <ChangeButton />
          </li>
        </ul>
      </div>
    </>
  );
}
