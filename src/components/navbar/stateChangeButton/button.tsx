import { MdFileCopy } from "react-icons/md"
import { BsMailbox } from "react-icons/bs"
import {useState} from 'react'

export default function ChangeButton(){

    const [mouseInto,SetMouseInto] = useState(false);
    const [copyMessage, SetCopyMessage] = useState(false);

    const mouseStateHandler = () =>{
        SetMouseInto(true)
      }
      const mouseStateLeaveHanlder = () =>{
        SetMouseInto(false)
      }

      const popUp = () =>{
        navigator.clipboard.writeText('how2richard@gmail.com')
        SetCopyMessage(true)
        setTimeout(()=>{
          SetCopyMessage(false)
        },2000)
      }

    return(
        <>
        <button onClick={()=>popUp()} onMouseEnter={mouseStateHandler} onMouseLeave={mouseStateLeaveHanlder}>
        {
          mouseInto?
          <MdFileCopy size = {"2.5em"}/>
          :<BsMailbox size={"2.5em"}/>
        }
      </button>
        {copyMessage ? (
            <div className="absolute bottom-10 h-[10vh] w-full text-sm bg-red-950 flex items-center justify-center text-white border-2 border-red-950 transition-all">
              Correo copiado en el portapapeles
            </div>
          ):null}
    </>
    )
}