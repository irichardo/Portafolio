import { HookSize } from "@/libs/types";

export default function TechComp({
  state,
  setState,
}: {
  state: HookSize;
  setState: () => void;
}) {
  return (
    <section
      className={`${
        state.section_3 || state.section_4 ? "h-2/5" : "h-1/5"
      } w-full inline-flex relative transition-all  ease-in-out overflow-hidden delay-200 `}
    >
      <div
        id="section_3"
        className={`
        ${state.section_3 ?"w-3/5" :state.section_4? "w-2/5" : "w-3/5"} 
        transition-all ease-in h-full bg-purple-600 `}
        onClick={setState}
      ></div>
      <div
        id="section_4"
        className={`${
          state.section_4?"w-3/5":"w-2/5"
        } transition-all ease-in h-full bg-purple-200 flex items-center justify-center `}
        onClick={setState}
      >
      </div>
      
    </section>
  );
}
