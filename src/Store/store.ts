import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type section_1 = {
    right:boolean
    left:boolean 
}
type section_2 = {
    left:boolean
    right:boolean
}

type section_3 = {
    left: boolean 
    mid: boolean 
    right: boolean 
}

interface sectionSize {
    section_1: section_1
    section_2: section_2
    section_3: section_3
    changeSection_State: (arg: string, section:string) => void
}


const useStore = create<sectionSize>()(
    devtools(
            (set) => ({
                section_1:{
                    left : false,
                    right : false,
                },
                section_2:{
                    left:false,
                    right:false
                },
                section_3: {
                    left: false,
                    mid: false,
                    right: false
                },
                changeSection_State: (by, section) => {
                    switch(section){
                        case 'section_1':
                            switch(by){
                                case 'section-left':
                                    set((state:sectionSize)=>({section_1:{...state.section_1,
                                    left:!state.section_1.left}}))
                                    break;
                                case 'section-right':
                                    set((state:sectionSize)=>({section_1:{...state.section_1,
                                    right:!state.section_1.right}}))
                                    break;
                            }
                            break;
                        case 'section_2':
                            switch(by){
                                case 'section-left':
                                    set((state:sectionSize)=>({section_2:{...state.section_2,
                                    left:!state.section_2.left}}))
                                    break;
                                case 'section-right':
                                    set((state:sectionSize)=>({section_2:{...state.section_2,
                                    right:!state.section_2.right}}))
                                    break;
                            }
                            break;
                        case 'section_3':
                            switch(by){
                            case 'section-left':
                                set((state:sectionSize) => ({section_3:{...state.section_3, left:!state.section_3.left} }))
                                break;
                            case 'section-middle':
                                set((state:sectionSize) => ({ section_3:{ ...state.section_3, mid:!state.section_3.mid } }))
                                break;
                            case 'section-right':
                                set((state:sectionSize) => ({ section_3:{ ...state.section_3, right:!state.section_3.right } }))
                                break;
                            }
                    }
                },
            }),
            {
                name: 'section-size',
            }
    )
)

export default useStore