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
    <div className="w-full h-full block md:flex relative font-chakra items-center justify-center">
      <div className=" w-full h-full md:h-full flex-col items-center justify-center flex bg-white">
        {/* <div className="w-full h-1/6 flex items-center justify-center text-3xl font-chakra text-white">
          Projects
        </div> */}
        <div className=" w-full h-full flex flex-col items-center justify-evenly">
          <div className=" w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex justify-center items-center text-white text-xs md:text-2xl shadow-lg relative custom-scrollbar overflow-y-auto overflow-x-hidden">
              <article className="w-full min-h-full flex items-center justify-center bg-slate-950 text-lg absolute top-0">
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
          {/* <div className="w-5/6 h-1/6 text-white justify-center items-center flex text-base">
            <div className=" h-[70%] md:h-[50%] flex items-center justify-center rounded-xl bg-gray-700 shadow-md hover:shadow-none w-2/3 hover:w-4/5 md:w-2/4 md:hover:w-2/3 lg:w-1/4 lg:hover:w-3/6 shadow-gray-950 transition-all">
              <Link
                className="w-full h-full flex items-center justify-center"
                href={`${gitHub.url}`}
                target="_blank"
              >
                <BsGithub size={30} className="m-2" />
                Ver Repositorio
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
