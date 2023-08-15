import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type section_1 = {
  right:boolean | undefined,
  left:boolean | undefined,
  mid:boolean | undefined
}
type section_2 = {
    left:boolean | undefined,
    right:boolean | undefined
    mid:boolean | undefined
}

type section_3 = {
    left: boolean | undefined,
    mid: boolean | undefined,
    right: boolean | undefined
}

interface sectionSize {
    section_1: section_1
    section_2: section_2
    section_3: section_3
    changeSection_State: (arg: string, section:string, extra:keyof section_3|undefined) => void
}


const useStore = create<sectionSize>()(
    devtools(
        persist(
            (set) => ({
                section_1:{
                    left : false,
                    mid: undefined,
                    right : false,
                },
                section_2:{
                    left:false,
                    mid:undefined,
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
                            break;
                        case 'section_2':
                            switch(by){
                                case 'left':
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
                    
                    switch (by) {
                        
                    }
                },
            }),
            {
                name: 'section-size',
            }
        )
    )
)

export default useStore;