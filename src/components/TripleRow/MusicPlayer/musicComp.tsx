import { FiPlay, FiPause } from "react-icons/fi";
import { LiaFastBackwardSolid, LiaFastForwardSolid } from "react-icons/lia";
import { clickMusicButton } from "@/hook/openMusicPlayer";
import { useState, useRef, useEffect } from "react";
export default function MusicPlayer({
  section_3,
  handlerChangeSize,
}: {
  section_3: boolean | undefined;
  handlerChangeSize: (by: React.MouseEvent<HTMLButtonElement> | any) => void;
}) {
  const [currentTime, setCurrentTime] = useState(0);
  const { handlerMusicDown, handlerMusicUp, button } = clickMusicButton();
  const [isPause, setPauseButton] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (event: any) => {
    setVolume(event.target.value);
  };

  const togglePlayerPause = () => {
    setIsPlaying(!isPlaying);
    //@ts-ignore
    console.log(Math.floor(audioRef.current.duration / 60));
    //@ts-ignore
    if (isPlaying) audioRef.current.play();
    //@ts-ignore
    else audioRef.current.pause();
  };
  const handlerPlayPauseButton = () => {
    setPauseButton(!isPause);
  };

  const handlerFunction = () => {
    togglePlayerPause();
    handlerPlayPauseButton();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (audioRef.current) {
        //@ts-ignore
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 1000); // Actualiza cada segundo

    return () => {
      clearInterval(intervalId);
    };
  }, [audioRef.current]);

  useEffect(() => {
    if (audioRef.current) {
      //@ts-ignore
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef.current]);

  return (
    <div
      className={`w-1/3 flex flex-col transition-all duration-200 bg-black divide-gray-200 divide-y-[0.5px]`}
    >
      <audio ref={audioRef} src={"/01.mp3"}></audio>

      <div
        data-position="section-right"
        className={`
        ${section_3 ? "h-1/2" : "h-full"}
         w-full justify-center items-center duration-200 transition-all
       `}
        onClick={handlerChangeSize}
      >
        {/* BackwardButton */}
        <div className="w-full h-[90%] items-center flex justify-around ">
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
            onClick={handlerFunction}
          >
            {isPause ? (
              <FiPause className="w-24 h-24 transition-all duration-100 " />
            ) : (
              <FiPlay className="w-24 h-24 transition-all duration-100 translate-x-2" />
            )}
          </button>
          {/* FastForwardButton */}
          <button>
            <LiaFastForwardSolid
              size={50}
              className="fill-white hover:translate-x-1 hover:fill-teal-300 transition-all ease-in-out"
            />
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          onChange={handleVolumeChange}
          className="focus:outline-none w-1/2"
        />
      </div>
      {/* Container Music Player */}
      <div
        className={`w-full 
        ${section_3 ? "h-1/2" : "h-0"}
        ${section_3 ? "opacity-100" : "opacity-0"}
        transition-all ease-in-out text-white duration-200 grid place-items-center`}
      >
        {true && (
          <div className="w-[90%] h-[90%] flex items-center flex-col justify-around font-chakra">
            <div className="text-center w-full bg-slate-700 rounded-lg hover:bg-slate-800">
              Reproduciendo: Hola Duracion:{" "}
              {audioRef !== null && audioRef.current
                ? `${Math.floor(currentTime / 60)}:${Math.floor(
                    currentTime % 60
                  )}`
                : "Cancion aun no seleccionada"}
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
