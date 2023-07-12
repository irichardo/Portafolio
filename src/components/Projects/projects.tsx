import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@context/GlobalContext";
import Link from "next/link";

/*------------------------Styles---------------*/
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

/* ---------CUSTOM MARKDOWN // COMPONENTS---------*/
import ReactMarkdown from "react-markdown";
import Code from "../markdowncustom/code";
import H1 from "../markdowncustom/tittle";
import H2 from "../markdowncustom/subtitle";
import LI from "../markdowncustom/list";
import Article from "../markdowncustom/article";
import Img from "../imageCompo";

/*------------------LIBS---------------------*/

import { url } from "@/libs";
import { gitHubLink } from "@/libs";
import LinkCustom from "../markdowncustom/link";


/*---------------------------------------------- */

export default function Projects() {
  const [gitHub, setGitHubLink] = useState<string>();
  const [rendermd, setMD] = useState<any>();
  const { gitData } = useContext(GlobalContext);


  /*      get md from api       */
  const getText = async (event: any | null) => {
    if (!event) {
      let noEventData = await fetch(
        `${url}api/githubdata?data=Portfolio`
      );
      let changeToText = await noEventData.text();
      setMD(changeToText);
      setGitHubLink(`${gitHubLink}Portfolio`);
    } else {
      let dynamicData = await fetch(
        `${url}api/githubdata?data=${event.target.value}`
      );
      let changeToText = await dynamicData.text();
      setMD(changeToText);
      setGitHubLink(`${gitHubLink}${event.target.value}`);
    }
  };

  useEffect(() => {
    getText(null);
  }, []);

  return (
    <div className="w-full h-full block md:flex relative font-chakra">
      <div className=" w-full h-5/6 md:w-5/6 md:h-full flex-col items-center justify-center flex ">
        <div className="w-full h-1/6 flex items-center justify-center text-3xl font-chakra text-white">
          Projects
        </div>
        <div className=" w-full h-4/6 md:w-4/5  md:h-5/6 flex flex-col items-center justify-evenly">
          <div className=" w-full md:w-5/6 h-5/6 flex items-center justify-center">
            <div className="w-full h-full flex justify-center items-center text-white text-xs md:text-2xl shadow-lg relative custom-scrollbar overflow-y-scroll overflow-x-hidden">
              <article className="w-full min-h-full flex items-center justify-center bg-slate-950 text-lg rounded-lg absolute top-0">
                {
                  <ReactMarkdown
                    className="w-5/6 flex flex-col justify-center text-white"
                    components={{
                      code: Code,
                      h1: H1,
                      h2: H2,
                      li: LI,
                      article: Article,
                      img: Img,
                      a:LinkCustom
                    }}
                  >
                    {rendermd}
                  </ReactMarkdown>
                }
              </article>
            </div>
          </div>
          <div className="w-5/6 h-1/6 text-white justify-center items-center flex text-base">
            <div className=" h-[70%] md:h-[50%] flex items-center justify-center rounded-xl bg-gray-700 shadow-md hover:shadow-none w-2/3 hover:w-4/5 md:w-2/4 md:hover:w-2/3 lg:w-1/4 lg:hover:w-3/6 shadow-gray-950 transition-all">
              <BsGithub size={30} className="m-2"/> 
            <Link href={`${gitHub}`} target="_blank" className="">
              Ver Repositorio
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-2/6 md:h-full items-center w-full">
        <div className="w-full h-1/6 md:w-2/3 lg:w-1/2 md:h-full flex md:block justify-center overflow-x-auto md:overflow-x-hidden md:overflow-y-auto custom-scrollbar">
          {gitData.map((a) => {
            return (
              <motion.button
                onClick={getText}
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
