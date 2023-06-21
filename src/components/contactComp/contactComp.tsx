import { MdMail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { MdSend } from "react-icons/md";

export default function ContactComp() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-1/2 h-full bg-gray-400 flex flex-col items-center rounded-tr-[50%] rounded-r-[50%]">
        <div className="w-4/5 h-2/6 font-mono text-4xl text-center flex flex-col justify-center">
          <div className="w-full h-1/5 text-white font-semibold text-4xl text-left">
            Lets discuss
          </div>
          <div className="w-full h-1/5 text-white font-semibold text-4xl text-left">
            on something <label className="text-pink-500">cool</label>
          </div>
          <div className="w-full h-1/5 text-white font-semibold text-4xl text-left">
            TOGETHER
          </div>
        </div>
        <div className="w-full h-4/6 text-white flex flex-col justify-start items-center">
          <button className="w-1/2 h-[14%] flex items-center hover:bg-purple-950 rounded-2xl focus:border-2 focus:bg-pink-700 focus:bg-opacity-50 focus:border-pink-950 text-left">
            <div className="w-1/6 h-full flex items-center justify-center">
              {<MdMail size={"2rem"} />}
            </div>
            <p className="text-lg font-bold tracking-widest">Mensajes</p>
          </button>
          <button className="w-1/2 h-[14%] flex items-center hover:bg-purple-950 rounded-2xl focus:border-2 focus:bg-pink-700 focus:bg-opacity-50 focus:border-pink-950 text-left">
            <div className="w-1/6 h-full flex items-center justify-center">
              {<BsPhone size={"2rem"} />}
            </div>
            <p className="text-lg font-bold tracking-widest">+123654654</p>
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full justify-center flex items-center">
        <div className="w-5/6 h-5/6 bg-white rounded-3xl">
          <div className="h-2/6 w-full flex flex-col items-center justify-center">
            <div className="w-5/6 h-[20vh] flex items-end font-semibold text-lg ">
              Estoy interesado en . . .
            </div>
            <div className="w-5/6 h-full flex flex-col">
              <button className="w-40 h-10 bg-pink-700 rounded-md border text-sm text-white border-pink-600 m-2">
                Prop de trabajo
              </button>
              <button className="w-40 h-10 bg-white rounded-md border text-sm text-gray-400 border-gray-600 m-2">
                Prop de trabajo
              </button>
            </div>
          </div>
          <div className="h-4/6 w-full ">
            <div className="h-5/6 w-5/7">
              <div className="w-full h-5/6 flex flex-col items-center">
                <input
                  placeholder="Your name"
                  className="bg-transparent focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />
                <input
                  placeholder="Your email"
                  className="bg-transparent focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />
                <input
                  placeholder="Your message"
                  className="bg-transparent focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />
              </div>
              <div className="w-full h-1/6 flex">
                <button className="w-1/3 h-3/4 rounded-md bg-pink-800 text-white text-sm font-semibold m-14 flex items-center">
                  <div className="w-2/6 h-full justify-center items-center flex">
                    <MdSend size={"1.5rem"}/>
                  </div>
                  <label>
                  Enviar mensaje
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
