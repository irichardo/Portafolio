import { useState } from "react";

export default function AboutMe() {
  const [window, setWindow] = useState({
    AboutMe: false,
  });

  const changeWindow = () => {
    setWindow({ ...window, AboutMe: !window.AboutMe });
  };

  return (
    <section
      className={`${
        window.AboutMe ? "h-2/5" : "h-1/5"
      } w-full inline-flex relative transition-all ease-in-out delay-300`}
    >
      <div
        className={` h-full bg-red-500 ${
          window.AboutMe ? "w-2/3" : "w-1/3"
        } transition-all ease-in`}
        onClick={changeWindow}
      ></div>
      <div
        className={`h-full ${
          window.AboutMe ? "w-1/3" : "w-2/3"
        } bg-purple-300  transition-all ease-in `}
      ></div>
    </section>
  );
}
