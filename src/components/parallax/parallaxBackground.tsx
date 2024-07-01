import React, { useContext } from "react";
import Image from "next/image";

/******* LIBS ****** */
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

/*------ CONTEXT ------ */
import { GlobalContext } from "@context/*";

const ParallaxBackground = () => {
  const { introBlogAnimation, setIntroBlogAnimation } =
    useContext(GlobalContext);

  /*   to make the intro animation only once  */
  const hanlderStopAnimation = () => {
    setTimeout(() => {
      setIntroBlogAnimation(true);
    }, 2000);
  };

  return (
    <section className="w-full h-full">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: "catdesktop.gif",
              speed: 10,
            },
            {
              speed: 0,
              children: (
                <div className="absolute inset-0 flex items-center justify-around bg-black bg-opacity-60">
                  <div className=" text-9xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white  bg-opacity-50 font-bold hidden md:block border-b-2 border-white">
                    DEV
                  </div>
                  {introBlogAnimation ? (
                    <div className="flex flex-col">
                      <div className="w-44 h-44 sm:h-56 sm:w-56 md:h-64 md:w-64 bg-gray-950 flex items-center justify-center text-3xl text-white -rotate-90 scale-y-[-1] rounded-2xl">
                        <Image
                          src="/logonobg.svg"
                          width={600}
                          height={600}
                          alt="personal brand"
                        />
                      </div>
                      <div className=" md:hidden text-lg text-white items-center justify-center flex font-chakra border-b-4 border-white">
                        DevBlog
                      </div>
                    </div>
                  ) : (
                    <motion.div
                      onAnimationComplete={hanlderStopAnimation}
                      className="w-44 h-44 sm:h-56 sm:w-56 md:h-64 md:w-64 bg-gray-950 flex items-center justify-center  text-3xl text-white relative"
                      style={{ scaleY: -1, rotateZ: 90 }}
                      initial={{ x: -300, opacity: 0.4 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        borderRadius: ["0%", "0%", "5%", "5%"],
                      }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        times: [0, 1],
                      }}
                    >
                      <Image
                        src="/logonobg.svg"
                        width={600}
                        height={600}
                        alt="personal brand"
                      />
                    </motion.div>
                  )}
                  <div className=" text-9xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold text-white hidden md:block border-b-2 border-white">
                    BLOG
                  </div>
                </div>
              ),
            },
          ]}
          className="h-full w-full"
        />
      </ParallaxProvider>
    </section>
  );
};

export default React.memo(ParallaxBackground);
