import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/globalContext";

export default function Projects() {
  const [actualProject, setActualProject] = useState<{
    url: String | undefined;
    description: String | null;
  }>({ url: undefined, description: null });

  const textoPorDefecto = "Texto no disponible";

  const { gitData } = useContext(GlobalContext);

  const screenHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    let target = event.target as HTMLButtonElement;
    let [description, url] = target.value.split("|");
    if (description == "null") {
      setActualProject({
        ...actualProject,
        url: url,
        description: textoPorDefecto,
      });
    } else {
      setActualProject({
        ...actualProject,
        url: url,
        description: description,
      });
    }
  };

  return (
    <div className="w-full h-full flex overflow-hidden">
      <div className="w-5/6 h-full flex items-center justify-center">
        <div className="w-4/5 h-5/6 flex flex-col items-center justify-evenly">
          <div className="w-5/6 h-3/6 flex items-center justify-center">
            {
              <div className="w-full h-full bg-fuchsia-600 flex justify-center items-center text-white text-2xl ">
                {actualProject.url ? actualProject.url 
                : gitData[0]?.url}
              </div>
            }
          </div>
          <div className="w-5/6 h-1/6 bg-blue-700 text-white justify-center items-center flex text-base">
            {actualProject.description == null ? (
              <div>Texto no disponible aun</div>
            ) : actualProject ? (
              actualProject.description
            ) : (
              gitData[0]?.description
            )}
          </div>
        </div>
      </div>
      <div className="w-2/6 h-full grid items-center">
        <div className="w-3/6 h-[88%] grid justify-center overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-corner-red-700 scrollbar-track-gray-300">
          {gitData.map((a) => {
            return (
              <button
                value={`${a.description}|${a.url}`}
                onClick={screenHandler}
                className="h-36 w-36 bg-slate-400 text-center overflow-hidden grid items-center m-5 rounded-lg text-white text-xl font-bold"
                key={a.url}
              >
                {a.url.split('/')[4]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
