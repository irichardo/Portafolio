import { MdSend } from "react-icons/md";
import { url } from "@/libs";

import React, { useRef, useState } from "react";

type form = {
  from?: string | undefined;
  email?: string | undefined;
  message?: string | undefined
  reason?: string | undefined;
};

export default function ContactComp() {
  /*   color button for Interesting  */
  const [form, setForm] = useState<form>({});
  const [resEmail, setResEmail] = useState<string>();

  // const formRef = useRef<any|null>()

  const valueButton = {
    project: "Project",
    jobProp: "jobProp",
  };

  const HandlerForm = (event: any) => {
    event.preventDefault();
    if (
      event.target.value === valueButton.project ||
      event.target.value === valueButton.jobProp
    )
      setForm({ ...form, reason: event.target.value });
    if (event.target.id === "name")
      setForm({ ...form, from: event.target.value });
    if (event.target.id === "mail")
      setForm({ ...form, email: event.target.value });
    if (event.target.id === "message") setForm({ ...form, message: event.target.value });
  };

  const sendMessage = async(e:any) =>{
    e.preventDefault();
  const resMail = await fetch(`${url}api/mailer`,{method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json, text/play, */*'},body:JSON.stringify(form)})
    const renderRes = await resMail.text();
    setForm({})
    setResEmail(renderRes)
  }

  return (
    <div className="w-full h-5/6 md:h-full flex items-center justify-center overflow-hidden relative">
      <div className="w-2/6 h-1/3 text-white font-chakra md:text-lg lg:text-2xl  grid-cols-1 grid-rows-3 hidden md:grid">
        <span className="text-red-600">¿Te gusto algo de lo que viste?</span>
        <span className="text-green-400">¿Solo quieres que
        compartamos experiencia mientras tomamos un café?☕</span>
        <span className="text-emerald-400">¿Tienes algun negocio interesante?</span>
        <span className="text-pink-700 md:text-xl lg:text-3xl animate-bounce">{`Contactame!✨ --->`}</span>
      </div>
      <div className="w-full sm:w-1/2 h-full justify-center flex items-center">
        <div className=" w-5/6 h-5/6 bg-white rounded-3xl">
          <div className="h-2/6 w-full flex flex-col items-center justify-center">
            <div className="w-5/6 h-[20vh] flex items-center justify-center md:justify-start sm:items-end font-semibold text-lg font-montserrat">
              Estoy interesado en . . .
            </div>
            <div className="w-5/6 h-full flex">
              <button
                id="Job"
                type="button"
                className={`w-40 h-10 ${
                  form.reason === valueButton.jobProp
                    ? "bg-red-700 text-white shadow-md shadow-slate-700"
                    : "bg-white text-gray-950 border-gray-600"
                } rounded-md border text-xs sm:text-sm m-2 cursor-default transition-shadow`}
                value={valueButton.jobProp}
                onClick={HandlerForm}
              >
                Propuesta de trabajo
              </button>
              <button
                id="Project"
                type="button"
                className={`w-40 h-10 ${
                  form.reason === valueButton.project
                    ? "bg-red-700 text-white shadow-md shadow-slate-700"
                    : "bg-white text-gray-950 border-gray-600"
                } rounded-md border text-xs sm:text-sm m-2 cursor-default transition-shadow`}
                value={valueButton.project}
                onClick={HandlerForm}
              >
                Proyecto
              </button>
            </div>
          </div>
          <div className="h-4/6 w-full ">
            <div className="h-5/6 w-5/7">
              <form className="w-full h-full grid columns-1 grid-rows-4 place-items-center" >
                <input
                  aria-label="Agregar tu nombre"
                  placeholder="Tu nombre"
                  type="text"
                  id="name"
                  value={form.from || ""}
                  onChange={HandlerForm}
                  className="bg-transparent placeholder-opacity-50 placeholder:text-center md:placeholder:text-start placeholder:text-xs focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />
                <input
                  aria-label="Escribir correo"
                  placeholder="Tu correo"
                  type="email"
                  id="mail"
                  value={form.email || ""}
                  onChange={HandlerForm}
                  className="bg-transparent placeholder-opacity-50 placeholder:text-center md:placeholder:text-start placeholder:text-xs focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />
                  <input
                  aria-label="Agregar mensaje"
                  placeholder="Tu mensaje"
                  type="text"
                  id="message"
                  value={form.message || ""}
                  onChange={HandlerForm}
                  className="bg-transparent placeholder-opacity-50 placeholder:text-center md:placeholder:text-start placeholder:text-xs focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />
                <div className="w-full min-h-[10vh] flex justify-center items-center relative flex-col">
                  {
                    form.email&&form.from&& form.message&&form.reason?
                    <button
                      type="submit"
                      onClick={sendMessage}
                      aria-label="enviar email"
                      className="w-[20vh] rounded-md bg-red-700 shadow-md shadow-slate-800 focus:shadow-none text-white text-sm font-semibold flex items-center justify-center transition-shadow m-4"
                    >              
                        <MdSend size="2rem" className="pointer-events-none"/>
                    </button>:
                     <button
                     type="button"
                    //  onClick={sendMessage}
                     aria-label="enviar email"
                     className="w-[20vh] rounded-md bg-gray-400 shadow-md focus:shadow-none text-white text-sm font-semibold flex items-center justify-center transition-shadow pointer-events-none m-4"
                   >              
                       <MdSend size="2rem" className="pointer-events-none"/>
                   </button>
                  }
                  {
                  resEmail&&
                  <div className=" font-montserrat font-bold  bg-green-500 text-white w-full text-xs md:text-sm lg:text-base h-[30%] md:w-2/3 lg:w-1/2 md:rounded-lg text-center p-2">{resEmail}🎉</div>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
