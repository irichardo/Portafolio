import { useState } from "react";
import sectionRoutes from "./index";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NavButton from "./navbarButton/button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import ChangeButton from "./stateChangeButton/button";

export default function Navbar() {
  const [listOpen, setListOpen] = useState(false);
  const [actualPath, setActualPath] = useState("");
  const [mouseEnter, setMouseEnter] = useState(true);
  const { Abilities, Home, About, Contact, Projects, DevBlog } = sectionRoutes;

  const changeListStatus = () => {
    setListOpen(!listOpen);
  };

  const autoClose = (event: any) => {
    // next.js don't let me use useRoute form next/router, and this is my actual solution
    const actualSection = event.target.href?.split("/")[3];
    setActualPath(actualSection);
    if (actualPath !== actualSection) {
      setTimeout(() => {
        setListOpen(false);
      }, 600);
    }
  };

  /*  handler for animation color  */
  const buttonColor = () => {
    setMouseEnter(true);
  };
  const buttonColorRemove = () => {
    setMouseEnter(false);
  };

  return (
    <>
      <div
        className={`w-[30vh] h-full bg-white fixed z-50 grid items-center text-lg font-chakra ${
          listOpen ? "" : "deactivate"
        } animationNavbar`}
      >
        <button
          type="button"
          aria-label="close div"
          className={`w-12 h-12 md:h-20 md:w-20  ${
            mouseEnter ? "bg-white" : "bg-gray-950"
          } absolute top-[44vh]  rounded-tr-full rounded-r-full flex items-center transition-colors ${
            listOpen ? "justify-center left-[30vh]" : "justify-end left-[30vh]"
          } transition-all`}
          onClick={() => changeListStatus()}
        >
          {listOpen ? (
            <MdKeyboardArrowLeft
              size="4rem"
              color={mouseEnter ? "black" : "white"}
              onMouseEnter={buttonColor}
              onMouseLeave={buttonColorRemove}
            />
          ) : (
            <MdKeyboardArrowRight
              size="4rem"
              color={mouseEnter ? "black" : "white"}
              onMouseEnter={buttonColor}
              onMouseLeave={buttonColorRemove}
            />
          )}
        </button>
        <ul className="relative text-xs md:text-base">
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
            route="/blogs"
          />
          <li className="w-full h-24 flex items-center justify-around ">
            <Link href="https://github.com/irichardo" target="blank">
              <FaGithub size="2.5em" className="colorIcons transition-colors"   />
            </Link>
            <Link href="https://www.linkedin.com/in/richardhd/" target="blank">
              <FaLinkedin
                size="2.5em"
                className="colorIcons transition-colors"
              />
            </Link>
            <ChangeButton />
          </li>
        </ul>
      </div>
    </>
  );
}
