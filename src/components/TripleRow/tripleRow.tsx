import { changeSectionHook } from "@/hook/sizeState";
import MusicPlayer from "./MusicPlayer/musicComp";

export default function TripleRow() {
  //   # Use an hook for control all sections of different sections
  const { handlerChangeSize, left, right , mid } = changeSectionHook("section_3", 3);
  
  return (
    <section
      className={`
          ${ mid || left || right ? "h-2/5" : "h-1/5"}
      w-full inline-flex relative transition-all duration-200`}
    >
      <div
        data-position="section-left"
        className={`
        ${left?"w-2/3":"w-1/3"}
        h-full bg-purple-700 transition-all duration-200`}
        onClick={handlerChangeSize}
      >
      </div>
      <div
        data-position="section-middle"
        className={`
            ${mid ? "w-2/3" : "w-1/3"}
      w-1/3 h-full bg-purple-800 transition-all duration-200`}
        onClick={handlerChangeSize}
      ></div>
      <MusicPlayer section_3={right} handlerChangeSize={handlerChangeSize} />
    </section>
  );
}
