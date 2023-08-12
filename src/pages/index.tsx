import Main from "@/components/landing/landing";
// import AboutMe from "@/components/aboutMe/page";
import Habilidades from "@/components/abilitesComp/abilities";
import Projects from "@/components/Projects/projects";
import AboutMe from "@/components/About/Comp";
import ContactComp from "@/components/contactComp/contactComp";
import Layout from "./layout";
import { getPosts } from "@/libs/posts";
import { useState } from "react";

export default function Home() {
  return (
    <Layout>
      {/* Main */}
      <main
        className={`flex flex-col items-center justify-between overflow-hidden bg-gray-900`}
      >
        {/* Wrapper */}

        <section className="w-screen h-[200vh] grid place-items-center transition">
          {/*Contain*/}

          <section className=" w-full h-[90%] md:w-[60%] md:h-[90%] rounded-lg overflow-hidden flex flex-col">
            {/* First Row */}

            <AboutMe/>

            {/* Second Row */}

            <section
              className={`h-1/5 w-full inline-flex relative transition-all  ease-in-out overflow-hidden`}
            >
              <div className="w-2/3 h-full bg-purple-600"></div>
              <div className="w-1/3 h-full bg-purple-200"></div>
            </section>

            {/* Third Row */}

            <section className={`h-1/5 w-full inline-flex relative`}>
              <div className="w-1/3 h-full bg-purple-700"></div>
              <div className="w-1/3 h-full bg-purple-800"></div>
              <div className="w-1/3 h-full bg-purple-400"></div>
            </section>

            {/* Four Row */}

            <section
              className={`h-2/5 w-full inline-flex relative`}
              id="About-me"
            >
              <div className="h-full w-1/3 bg-green-400"></div>
              <div className="h-full w-2/3 bg-green-800">
                <Projects />
              </div>
            </section>

            {/***************/}
          </section>
        </section>
      </main>
    </Layout>
  );
}
