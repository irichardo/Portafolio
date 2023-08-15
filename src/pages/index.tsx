// import Main from "@/components/landing/landing";
// import AboutMe from "@/components/aboutMe/page";
// import Habilidades from "@/components/abilitesComp/abilities";
import Projects from "@/components/Projects/projects";
import AboutMe from "@/components/profile/Comp";
import TechComp from "@/components/tech/techComp";
// import ContactComp from "@/components/contactComp/contactComp";
import Layout from "./layout";
import { getPosts } from "@/libs/posts";
import { useState } from "react";
import { ResizeDiv } from "@/hook/ChangeSizeWindow";
import TripleRow from "@/components/TripleRow/tripleRow";

export default function Home() {

  const { changeScreenSize, handlerOpenOrClosedWindow } = ResizeDiv()

  return (
    <Layout>
      {/* Main */}
      <main
        className={`flex flex-col items-center justify-between overflow-hidden bg-gray-900`}
      >
        {/* Wrapper */}

        <section className="w-screen h-[200vh] grid place-items-center transition">
          {/*Contain*/}

          <section className=" w-full h-[90%] md:w-[80%] md:h-[90%] rounded-lg overflow-hidden flex flex-col border-[1px] border-slate-600">
           
            {/* First Row */}

            <AboutMe state={changeScreenSize} setState={handlerOpenOrClosedWindow} />

            {/* Second Row */}

            <TechComp state={changeScreenSize} setState={handlerOpenOrClosedWindow}/>

             {/* Third Row */}

            <TripleRow state={changeScreenSize} setState={handlerOpenOrClosedWindow}/>

            {/* Four Row */}

            <section
              className={`h-2/5 w-full inline-flex relative`}
              id="About-me"
            >
              <div className="h-full w-1/3 bg-green-400"></div>
              <div className="h-full w-2/3 bg-green-800">
                {/* <Projects /> */}
              </div>
            </section>

            {/***************/}
          </section>
        </section>
      </main>
    </Layout>
  );
}
