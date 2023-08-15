import { section_3_section_hook } from "@/hook/sizeState";
import MusicPlayer from "./MusicPlayer/musicComp";

export default function TripleRow() {
  //   # Use an hook for control all sections of different sections
  const { left, mid, right, handlerFunctionTest } = section_3_section_hook('section_3');

  return (
    <section
      className={`
    ${left || mid || right ? "h-2/5" : "h-1/5"} 
      w-full inline-flex relative transition-all duration-200`}
    >
      <div
        data-position="section-left"
        className={`
        ${left ? "w-2/3" : "w-1/3"} 
        w-1/3
        h-full bg-purple-700 transition-all duration-200`}
        onClick={handlerFunctionTest}
      ></div>
      <div
        data-position="section-middle"
        className={`
      ${mid ? "w-2/3" : "w-1/3"}
      w-1/3 h-full bg-purple-800 transition-all duration-200`}
        onClick={handlerFunctionTest}
      ></div>
      <MusicPlayer
        section_3={right}
        handlerFunctionTest={handlerFunctionTest}
      />
    </section>
  );
}
