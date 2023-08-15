import useStore from "@/Store/store";
import { sectionSize, section_3 } from "@/libs/types";

export const section_3_section_hook = (arg:string) =>{
  const { left, mid, right } = useStore((state)=>state.section_3)
    const setState = useStore((state)=>state.changeSection_State)
    const handlerFunctionTest = (props:React.MouseEvent<HTMLDivElement>| any) =>{
  
      const divTarget = props.currentTarget;
      const divPosition = divTarget.getAttribute('data-position')
      setState(divPosition,arg)
    }
   return{
    left,
    mid,
    right,
    setState,
    handlerFunctionTest
   }
}