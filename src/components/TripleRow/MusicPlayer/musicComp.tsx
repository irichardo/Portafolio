import { FiPlay } from "react-icons/fi";
import { LiaFastBackwardSolid, LiaFastForwardSolid } from "react-icons/lia";
import { clickMusicButton } from "@/hook/openMusicPlayer";
export default function MusicPlayer({
  section_3,
  handlerFunctionTest,
}: {
  section_3: boolean;
  handlerFunctionTest: (by: React.MouseEvent<HTMLButtonElement> | any) => void;
}) {
  const { button, handlerMusicDown, handlerMusicUp } = clickMusicButton();
  return (
    <div
      className={`w-1/3 flex flex-col transition-all duration-200 bg-black divide-gray-200 divide-y-[0.5px]`}
    >
      <div
        data-position="section-right"
        className={`
          ${section_3 ? "h-1/2" : "h-full"}
         w-full 
       items-center flex justify-around duration-200 transition-all `}
        onClick={handlerFunctionTest}
      >
        {/* BackwardButton */}
        <button>
          <LiaFastBackwardSolid
            size={50}
            className="fill-white hover:-translate-x-1 hover:fill-teal-300 transition-all  ease-in-out duration-200"
          />
        </button>
        {/* PlayButton */}
        <button
          className={`w-40 h-40 ${
            button ? "bg-gray-400" : "bg-white"
          } rounded-full grid place-content-center transition-all hover:w-52 hover:h-52`}
          onMouseDown={handlerMusicDown}
          onMouseUp={handlerMusicUp}
        >
          <FiPlay className="w-24 h-24 transition-all duration-100 translate-x-2" />
        </button>
        {/* FastForwardButton */}
        <button>
          <LiaFastForwardSolid
            size={50}
            className="fill-white hover:translate-x-1 hover:fill-teal-300 transition-all ease-in-out"
          />
        </button>
        {/* Container Music Player */}
        {/* <div></div> */}
      </div>
      <div
        className={`w-full 
        // ${section_3 ? "h-1/2" : "h-0"}
        // ${section_3 && "opacity-100"} opacity-0
        transition-all ease-in-out text-white duration-200 grid place-items-center`}
      >
        {true && (
          <div className="w-[90%] h-[90%] flex items-center flex-col justify-around font-chakra">
            <div className="text-center w-full bg-slate-700 rounded-lg hover:bg-slate-800">
              Reproduciendo: Hola
            </div>
            <div className="text-center w-full hover:bg-slate-500 rounded-lg transition-all duration-300">
              Hola
            </div>
            <div className="text-center w-full hover:bg-slate-500 rounded-lg transition-all duration-300">
              Hola
            </div>
            <div className="text-center w-full hover:bg-slate-500 rounded-lg transition-all duration-300">
              Hola
            </div>
            <div className="text-center w-full hover:bg-slate-500 rounded-lg transition-all duration-300">
              Hola
            </div>
            <div className="text-center w-full hover:bg-slate-500 rounded-lg transition-all duration-300">
              Hola
            </div>
          </div>
        )}
      </div>
    </div>
  );
}