import Projects from "@/components/Projects/projects";
import AboutMe from "@/components/profile/Comp";
import TechComp from "@/components/tech/techComp";
import { BsMailbox } from "react-icons/bs";
import Layout from "./layout";
import TripleRow from "@/components/TripleRow/tripleRow";
import { useEffect, useState } from "react";
import Contact from "@/components/contact/contact";
import Image from "next/image";
import Link from "next/link";
import SocialBar from "@/components/socialMedia/socialMediaBar";

export default function Home() {
  const [mouseEnter, setMouseEnterOrLeave] = useState(false);
  const [bgColor, SetBgColor] = useState<number>(1)
  const handlerMouseEnter = () => {
    setMouseEnterOrLeave(!mouseEnter);
  };

  const colorbg = [
    'bg-blue-200',
    'bg-slate-700',
    'bg-purple-200'
   ]
  
  //  const randomNumber = () => {
  //   let randomNumber = Math.floor(Math.random() * 3) + 1;
  //   return randomNumber
  //  }

  // const handlerRandomColor = ()=> {
  //   let number = randomNumber();
  //   console.log(number);
  //   SetBgColor(number)
  // }

  // useEffect(() => {
  //   const changeBg = setTimeout(()=>{
  //     handlerRandomColor()
  //   },1000)
  //   return () => clearTimeout(changeBg)
  // }),[]

  return (
    <Layout>
      {/* Main */}
      <main
        className={`flex flex-col items-center justify-between overflow-hidden ${colorbg[bgColor]} transition-colors duration-200`}
      > 
        <SocialBar/>
        <Contact mouseEnter={mouseEnter} handlerMouseEnter={handlerMouseEnter}/>
        {/* Wrapper */}

        <section className="w-screen h-[200vh] grid place-items-center transition">
          {/*Contain*/}

          <section className=" w-full h-[90%] md:w-[80%] md:h-[90%] rounded-lg overflow-hidden flex flex-col shadow-lg">
            {/* First Row */}

            <AboutMe />

            {/* Second Row */}

            <TechComp />

            {/* Third Row */}

            <TripleRow />

            {/* Four Row */}

            <section
              className={`h-2/5 w-full inline-flex relative`}
              id="About-me"
            >
              <div className="h-full w-1/3 relative overflow-hidden">
                {/* Mail section */}
                <div
                  className={`w-full h-1/2 text-8xl text-center overflow-hidden relative grid place-content-center transition-all duration-300`}
                  // onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}
                  onClick={handlerMouseEnter}
                >
                  <div
                    className={`w-full h-full ${
                      mouseEnter && "translate-y-56"
                    } transition-all duration-500`}
                  >
                    📩
                  </div>
                </div>
                {/* BlogSection */}
                <div className="w-full h-1/2 relative">
                  <Image src="/catdesktop.gif" fill className="object-cover opacity-80" alt="test" />
                  <Link href={'/blogs'} className="absolute w-full h-full font-chakra text-7xl text-white grid place-items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:bg-black hover:bg-opacity-20 hover:text-8xl transition-all">
                    BLOG
                  </Link>
                </div>
              </div>
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
