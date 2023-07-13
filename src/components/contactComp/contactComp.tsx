import { MdSend } from "react-icons/md";
import { BsPhone } from "react-icons/bs";

import React, { useState } from "react";

type form = {
  name?: string | undefined;
  mail?: string | undefined;
  message?: string | undefined;
  data?: string | undefined;
};

export default function ContactComp() {
  /*   color button for Interesting  */
  const [form, setForm] = useState<form>({});

  const [buttonmail, SetButtonMail] = useState(false);

  const valueButton = {
    project: "Project",
    jobProp: "jobProp",
  };

  const HandlerForm = (event: any) => {
    if (
      event.target.value === valueButton.project ||
      event.target.value === valueButton.jobProp
    )
      setForm({ ...form, data: event.target.value });
    if (event.target.id === "name")
      setForm({ ...form, name: event.target.value });
    if (event.target.id === "mail")
      setForm({ ...form, mail: event.target.value });
    if (event.target.id === "message")
      setForm({ ...form, mail: event.taget.value });
  };

  return (
    <div className="w-full h-5/6 md:h-full flex items-center justify-center overflow-hidden relative">
      <div className="w-full sm:w-1/2 h-full justify-center flex items-center">
        <div className=" w-5/6 h-5/6 bg-white rounded-3xl">
          <div className="h-2/6 w-full flex flex-col items-center justify-center">
            <div className="w-5/6 h-[20vh] flex items-center justify-center md:justify-start sm:items-end font-semibold text-lg font-roboto">
              Estoy interesado en . . .
            </div>
            <div className="w-5/6 h-full flex">
              <button
                id="Job"
                type="button"
                className={`w-40 h-10 ${
                  form.data === valueButton.jobProp
                    ? "bg-red-700 text-white shadow-md shadow-slate-700"
                    : "bg-white text-gray-400 border-gray-600"
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
                  form.data === valueButton.project
                    ? "bg-red-700 text-white shadow-md shadow-slate-700"
                    : "bg-white text-gray-400 border-gray-600"
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
              <form className="w-full h-full flex flex-col items-center">
                <input
                  aria-label="Agregar tu nombre"
                  placeholder="Tu nombre"
                  id="name"
                  value={form.name || ""}
                  onChange={HandlerForm}
                  className="bg-transparent placeholder-opacity-50 placeholder:text-center md:placeholder:text-start placeholder:text-xs focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />
                <input
                  aria-label="Escribir correo"
                  placeholder="Tu correo"
                  id="mail"
                  value={form.mail || ""}
                  onChange={HandlerForm}
                  className="bg-transparent placeholder-opacity-50 placeholder:text-center md:placeholder:text-start placeholder:text-xs focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />
                <input
                  aria-label="Agregar mensaje"
                  placeholder="Tu mensaje"
                  id="message"
                  value={form.message || ""}
                  onChange={HandlerForm}
                  className="bg-transparent placeholder-opacity-50 placeholder:text-center md:placeholder:text-start placeholder:text-xs focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
                />

                <div className="w-full h-2/6 flex justify-center items-center relative">
                  {
                    <button
                      type="submit"
                      aria-label="enviar email"
                      className="w-[20vh] rounded-md bg-red-700 shadow-md shadow-slate-800 focus:shadow-none text-white text-sm font-semibold flex items-center justify-center transition-shadow"
                    >
                      <div className="w-2/6 h-full justify-center items-center flex">
                        <MdSend size="2rem" />
                      </div>
                    </button>
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
