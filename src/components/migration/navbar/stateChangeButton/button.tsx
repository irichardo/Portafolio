import { MdFileCopy } from 'react-icons/md'
import { BsMailbox } from 'react-icons/bs'
import { useState } from 'react'

export default function ChangeButton () {
  const [mouseInto, SetMouseInto] = useState(false)
  const [copyMessage, SetCopyMessage] = useState(false)
  const [focus, setFocus] = useState(false)

  const mouseStateHandler = () => {
    SetMouseInto(true)
  }
  const mouseStateLeaveHanlder = () => {
    SetMouseInto(false)
  }

  const popUp = () => {
    navigator.clipboard.writeText('richardhdjob@gmail.com')
    setFocus(true)
    setTimeout(() => {
      setFocus(false)
    }, 1000)
    SetCopyMessage(true)
    setTimeout(() => {
      SetCopyMessage(false)
    }, 1500)
  }

  return (
    <>
      <button type="button" aria-description='Mail' onClick={() => popUp()} onMouseEnter={mouseStateHandler} onMouseLeave={mouseStateLeaveHanlder}>
        {
          mouseInto
            ? <MdFileCopy size='2.5em' color='#BD345D' className='colorIcons' />
            : <BsMailbox size='2.5em' />
        }
      </button>
      {copyMessage
        ? (
          <div className={`absolute bottom-10 h-[10vh] w-full text-sm bg-gray-400 flex items-center justify-center text-center text-white transition-transform ${focus ? 'translate-y-16 sm:translate-y-24 translate-x-0' : 'translate-y-44 sm:translate-y-60 text-transparent opacity-30'} delay-200}`}>
            Correo copiado en el portapapeles
          </div>
          )
        : null}
    </>
  )
}
