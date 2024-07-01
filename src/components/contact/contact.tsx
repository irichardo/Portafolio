import { useState } from "react";
import { MdSend } from "react-icons/md";

type form = {
    from?: string | undefined;
    email?: string | undefined;
    message?: string | undefined;
    reason?: string | undefined;
  };
  
  type emailState = {
    error: boolean;
    message: string | null;
  };
  

export default function Contact({
  mouseEnter,
  handlerMouseEnter,
}: {
  mouseEnter: Boolean;
  handlerMouseEnter: () => void;
}) {

    const [form, setForm] = useState<form>({});
  const [resEmail, setResEmail] = useState<emailState>({
    error: true,
    message: "",
  });

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
    if (event.target.id === "message")
      setForm({ ...form, message: event.target.value });
  };

  const sendMessage = async (e: any) => {
    e.preventDefault();
    await fetch(`api/mailer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/play, */*",
      },
      body: JSON.stringify(form),
    })
      .then(async (response) => {
        const { error, message } = await response.json();
        if (response.ok) {
          setForm({});
          setResEmail({ error: false, message });
          setTimeout(() => {
            setResEmail({ error: false, message: "" });
          }, 3000);
        } else {
          throw new Error(error);
        }
      })
      .catch((error) => {
        setResEmail({ error: true, message: error.message });
        setTimeout(() => {
          setResEmail({ error: false, message: "" });
        }, 3000);
      });
  };


  return (
    <div
      className={`w-1/2 h-screen backdrop-blur-sm rounded fixed z-20 left-0  ${
        mouseEnter ? "translate-x-0" : "-translate-x-[120vh]"
      } transition-transform overflow-y-hidden duration-500 grid place-items-center`}
      // onClick={handlerMouseEnter}
    >
      <button className="w-10 h-10 bg-black text-white top-0 right-0 absolute" onClick={handlerMouseEnter}>aqui</button>
      <div className="bg-white h-[80%] w-1/2 grid place-content-center rounded-md">
        <div className="h-full w-full">
          <div className="h-full w-5/7">
            <form className="w-full h-full grid columns-1 grid-rows-4 place-items-center">
              <input
                aria-label="Agregar tu nombre"
                placeholder="Tu nombre ( A - Z )"
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
                placeholder="Tu mensaje (mínimo 8 caracteres)"
                type="text"
                id="message"
                value={form.message || ""}
                onChange={HandlerForm}
                className="bg-transparent placeholder-opacity-50 placeholder:text-center md:placeholder:text-start placeholder:text-xs focus:outline-none border-b focus:border-b-2 border-b-pink-600 w-5/6 m-8 placeholder-purple-900 font-semibold"
              />
              <div className="w-full min-h-[10vh] flex justify-center items-center relative flex-col">
                {form.email && form.from && form.message && form.reason ? (
              <button
                type="submit"
                onClick={sendMessage}
                aria-label="enviar email"
                className="w-[20vh] rounded-md bg-red-700 shadow-md shadow-slate-800 focus:shadow-none text-white text-sm font-semibold flex items-center justify-center transition-shadow m-4"
              >
                <MdSend size="2rem" className="pointer-events-none" />
              </button>
            ) : (
              <button
                type="button"
                 onClick={sendMessage}
                aria-label="enviar email"
                className="w-[20vh] rounded-md bg-gray-400 shadow-md focus:shadow-none text-white text-sm font-semibold flex items-center justify-center transition-shadow pointer-events-none m-4"
              >
                <MdSend size="2rem" className="pointer-events-none" />
              </button>
            )}
                {resEmail.message && (
              <div
                className={`font-montserrat font-bold  ${
                  resEmail.error ? "bg-red-500" : "bg-green-500"
                } text-white w-full text-xs md:text-sm lg:text-base h-[30%] md:w-2/3 lg:w-1/2 md:rounded-lg text-center p-2`}
              >
                {resEmail.message}🎉
              </div>
            )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
