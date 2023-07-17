import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@context/GlobalContext";
import Link from "next/link";

/*------------------------Styles---------------*/
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import {Grid} from 'react-loader-spinner'

/* ---------CUSTOM MARKDOWN // COMPONENTS---------*/
import ReactMarkdown from "react-markdown";
import Code from "../markdowncustom/code";
import H1 from "../markdowncustom/tittle";
import H2 from "../markdowncustom/subtitle";
import Article from "../markdowncustom/article";
import Li from "../markdowncustom/list";
import Img from "../imageCompo";

/*------------------LIBS---------------------*/

import { url } from "@/libs";
import { gitHubLink } from "@/libs";
import LinkCustom from "../markdowncustom/link";

/*---------------------------------------------- */

export default function Projects() {
  const [gitHub, setGitHubLink] = useState({value:'', url:''});
  const [loading, setLoading] = useState<boolean>(false);
  const [rendermd, setMD] = useState<any>();
  const { gitData } = useContext(GlobalContext);

  /*      get md from api       */
  const getText = async (event: any | null) => {
    if(event && event.target.value === gitHub.value) return
    setLoading(true)
    if (!event) {
      const noEventData = await fetch(`${url}api/githubdata?data=Portafolio`);
      const changeToText = await noEventData.text();
      setMD(changeToText);
      setGitHubLink({url:`${gitHubLink}Portafolio`,value:'Portafolio'});
      setLoading(false)
    } else {
      const dynamicData = await fetch(
        `${url}api/githubdata?data=${event.target.value}`
      );
      const changeToText = await dynamicData.text();
      setMD(changeToText);
      setGitHubLink({url:`${gitHubLink}${event.target.value}`,value:event.target.value});
      setLoading(false)
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
            <div className="w-full h-full flex justify-center items-center text-white text-xs md:text-2xl shadow-lg relative custom-scrollbar overflow-y-auto overflow-x-hidden">
              <article className="w-full min-h-full flex items-center justify-center bg-slate-950 text-lg rounded-lg absolute top-0">
                {
                loading?<Grid color="#E11D48"/>:  
                  <ReactMarkdown
                    className="w-5/6 flex flex-col justify-center text-white"
                    components={{
                      code: Code,
                      h1: H1,
                      h2: H2,
                      li: Li,
                      article: Article,
                      img: Img,
                      a: LinkCustom,
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
              <Link
                className="w-full h-full flex items-center justify-center"
                href={`${gitHub}`}
                target="_blank"
              >
                <BsGithub size={30} className="m-2" />
                Ver Repositorio
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/6 md:h-full flex md:flex-col overflow-x-auto custom-scrollbar items-center md:items-start sm:justify-center">
        {/* <div className=" h-1/6 md:w-2/3 lg:w-1/2 md:h-full inline-flex md:block justify-around  md:overflow-x-hidden md:overflow-y-auto overflow-x-scroll"> */}
          {gitData.map((a) => {
            /* github problemas , no let me delete that's repo */
            if (a.url.endsWith("blogpost") || a.url.endsWith("Prep-Course"))
              return;
            return (
              <motion.button
                onClick={getText}
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.2 }}
                value={a.url.split("/")[4]}
                className={`h-20 w-32
                md:h-28 md:w-28 lg:min-h-20 lg:min-w-20 lg:h-32 lg:w-32 ${
                  gitHub.value === a.url.split("/")[4]
                    ? "bg-pink-700"
                    : "bg-slate-600"
                } shadow-white text-center flex justify-center items-center rounded-lg text-white text-xs md:text-lg font-bold p-10 m-2`}
                key={a.url}
              >
                {a.url.split("/")[4]}
              </motion.button>
            );
          })}
        {/* </div> */}
      </div>
    </div>
  );
}
