import { HookSize } from '@/libs/types'
import { useState } from 'react'

export function ResizeDiv(initialState: boolean = false): { changeScreenSize: HookSize, handlerOpenOrClosedWindow:()=>void } {
  const [changeScreenSize, setWindowOpen] = useState({
    about: false,
    projects:false,
    logo:false,
    section_3:false,
    section_4:false,
    section_5:{
      section_1:false,
      section_2:false
    }
  })

  const [actualValue, setActualValue] = useState<string>()

  const handlerOpenOrClosedWindow = (arg:any) => {
    const  id  = arg.target.id.toString() 
    // Change state en every
    switch(id.toString()){
        case 'about':
            setActualValue(id.toString())
            setWindowOpen({...changeScreenSize, about:!changeScreenSize.about})
            break;
        case 'logo':
            setWindowOpen({...changeScreenSize, logo:!changeScreenSize.logo})
            break;
        case 'section_3':
            setWindowOpen({...changeScreenSize, section_3:!changeScreenSize.section_3})
            break;
        case 'section_4':
            setWindowOpen({...changeScreenSize, section_4:!changeScreenSize.section_4})
            break;
    // Control for 3 section in TripleRowComponent
    // toDo: ChangeGlobal state in the case it's necessary
        case 'section_5':
            setWindowOpen({...changeScreenSize, section_5:{...changeScreenSize.section_5,section_1:!changeScreenSize.section_5.section_1}})
            break;
        default:
            null
    }
  }

  return { changeScreenSize , handlerOpenOrClosedWindow}

}
