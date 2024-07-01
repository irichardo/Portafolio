import useStore from "@/Store/store";

export const changeSectionHook = (arg: string, section: number) => {
  const { left, mid, right } = useStore((state:any) => state[section === 1 ? 'section_1' : section === 2 ? 'section_2' : 'section_3'])
  
  const setState = useStore((state) => state.changeSection_State)
  const handlerChangeSize = (props: React.MouseEvent<HTMLDivElement> | any) => {

    const divTarget = props.currentTarget;
    const divPosition = divTarget.getAttribute('data-position')
    setState(divPosition, arg)
  }
  return {
    left,
    mid,
    right,
    handlerChangeSize
  }
}