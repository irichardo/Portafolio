import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { blogdata } from "@/libs/types";
import { GlobalContext } from "@context/GlobalContext";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Code from "../markdowncustom/code";
import H1 from "../markdowncustom/tittle";
import H2 from "../markdowncustom/subtitle";
import LI from "../markdowncustom/list";

export default function Projects({ data }: { data: blogdata[] }) {
  const [selectedProject, setSelectedProject] = useState<any>();
  const [isActive, setIsActive] = useState(false);
  const [Logic, setRenderData] = useState<any>();

  const { gitData } = useContext(GlobalContext);

  const viewerData = (event: any) => {
    setSelectedProject(event.target.value);
  };

  const getText = async (event: any | null) => {
    if (!event) {
      let noEventData = await fetch(
        `https://www.richardhd.com/githubdata?data=learnify`
      );
      let changeToText = await noEventData.text();
      setRenderData(changeToText);
    } else {
      let dynamicData = await fetch(
        `https://www.richardhd.com/githubdata?data=${event.target.value}`
      );
      let changeToText = await dynamicData.text();
      setRenderData(changeToText);
      readmeActiveHandler();
    }
  };

  const readmeActiveHandler = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    getText(null);
  }, []);

  return (
    <div className="w-full h-full block md:flex relative">
      {Logic && isActive && (
        <div className="w-screen h-screen items-center justify-center flex top-0 z-50 relative">
          <button
            className="w-16 h-16  bg-red-500 absolute top-0 right-16"
            onClick={readmeActiveHandler}
          ></button>
          <article className="w-4/5 h-full overflow-y-auto overflow-x-hidden flex items-center justify-center bg-white text-lg font-chakra">
            {
              <ReactMarkdown
                className="w-5/6 flex flex-col justify-center"
                components={{ code: Code, h1: H1, h2: H2, li: LI }}
              >
                {Logic}
              </ReactMarkdown>
            }
          </article>
        </div>
      )}
      <div className=" w-full h-5/6 md:w-5/6 md:h-full items-center justify-center flex ">
        <div className=" w-full h-4/6 md:w-4/5  md:h-5/6 flex flex-col items-center justify-evenly">
          <div className=" w-full md:w-5/6 h-4/6 flex items-center justify-center">
            <div className="w-full h-full flex justify-center items-center text-white text-xs md:text-2xl shadow-lg shadow-gray-950 hover:shadow-none transition-all relative">
              {/* {selectedProject && (
                <Image
                  src={selectedProject.cover}
                  alt="Github Projets Image"
                  fill
                />
              )} */}
            </div>
          </div>
          <div className="w-5/6 h-1/6 text-white justify-center items-center flex text-base shadow-sm shadow-gray-950 hover:shadow-none transition-all">
            <button value={selectedProject} onClick={getText}>
              Leer descripcion tecnica
            </button>
          </div>
        </div>
        ad
      </div>
      <div className="md:w-2/6 md:h-full items-center w-full">
        <div className="w-full h-1/6 md:w-2/3 lg:w-1/2 md:h-[88%] flex md:block justify-center overflow-x-auto md:overflow-x-hidden md:overflow-y-auto custom-scrollbar">
          {gitData.map((a) => {
            return (
              <motion.button
                onClick={viewerData}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.2 }}
                value={a.url.split("/")[4]}
                className=" h-16 md:h-24 md:w-24 lg:min-h-20 lg:min-w-20 lg:h-36 lg:w-36 bg-slate-600 text-center flex justify-center items-center m-5 rounded-lg text-white text-xs md:text-lg font-bold p-4"
                key={a.url}
              >
                {a.url.split("/")[4]}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
