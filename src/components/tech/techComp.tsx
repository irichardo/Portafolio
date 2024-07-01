import { changeSectionHook } from "@/hook/sizeState";
import {
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export default function TechComp() {
  const { handlerChangeSize, left, right } = changeSectionHook("section_2", 2);

  return (
    <section
      className={`
      ${left || right ? "h-2/5" : "h-1/5"}
      inline-flex relative transition-all overflow-hidden ease-in-out duration-300`}
    >
      <div
        data-position="section-left"
        className={`
        w-4/6
        transition-all h-full bg-violet-500 duration-300`}
        onClick={handlerChangeSize}
      >
        {
          // left && (
          <div
            className={` place-items-center h-full relative overflow-hidden`}
          >
            <div
              className={`absolute z-10 w-full h-full bg-violet-900 text-3xl text-white ${
                left ? "-translate-y-[60vh]" : "translate-x-0"
              } transition-all duration-500 flex items-center justify-center`}
            >
              {" "}
              Tecnologias{" "}
            </div>
              <div className="grid place-items-center grid-cols-4 grid-rows-2 h-full w-full">
                <FaGithub size={70} color="white" />
                <FaReact size={70} color="white" />
                <SiJavascript size={70} color="white" />
                <FaNodeJs size={70} color="white" />
                <FaDocker size={70} color="white" />
                <GrMysql size={70} color="white" />
                <SiTailwindcss size={70} color="white" />
                <FaPython size={70} color="white" />
              </div>
          </div>
          // )
        }
      </div>
      <div
        data-position="section-right"
        className={`
        ${right && !left ? "w-4/6" : right && left ? "w-4/6" : "w-2/6"}
        transition-all h-full bg-purple-200 flex items-center justify-center ease-in-out duration-300 `}
        onClick={handlerChangeSize}
      ></div>
    </section>
  );
}
