export default function AboutMe({state, setState}:{state:any, setState:()=>void}) {
   
  return (
    <section
      className={`${
        state.logo || state.about ? "h-2/5" : "h-1/5"
      } w-full inline-flex relative transition-all ease-in-out delay-200`}
    >
      <div
        id = 'logo'
        className={` h-full bg-red-500 ${
         state.logo ? "w-2/3" : "w-1/3"
        } transition-all ease-in `}
        onClick={setState}
      ></div>
      <div
        id = 'about'
        className={`h-full ${
          state.about ? "w-2/3" : state.logo? "w-1/3" : "w-2/3"
        } bg-purple-300  transition-all ease-in`}
        onClick={setState}
      ></div>
    </section>
  );
}
