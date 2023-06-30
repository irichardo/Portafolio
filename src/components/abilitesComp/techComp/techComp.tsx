const imagenes = [
  {
    name: 'Java'
  },
  {
    name: 'React'
  },
  {
    name: 'Javasript'
  },
  {
    name: 'Node'
  },
  {
    name: 'Docker'
  },
  {
    name: 'MySQL'
  },
  {
    name: 'Tailwind'
  },
  {
    name: '+'
  }
]

const TechComp = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-3/5 h-5/6'>
        <div className='w-full h-1/6  flex justify-center items-center shadow-xl'>
          <span className='text-3xl text-white'>Tecnologias</span>
        </div>
        <div className='w-full h-5/6 flex justify-center items-center'>
          <div className='w-[16rem] h-[32rem] bg-slate-400 grid grid-cols-2 gap-0'>
            {imagenes.map((a) => {
              return (
                <div className='h-[8rem] w-[8rem] flex justify-center items-center shadow-inner shadow-red-200 bg-gray-100 hover:bg-gray-400 text-lg font-extrabold' key={a.name}>
                  {a.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechComp
