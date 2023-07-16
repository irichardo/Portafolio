import {FaReact, FaNodeJs, FaDocker, FaGit, FaPython} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'

/*     INDEX IMAGES        */

const imagenes = [
  { id:1,
    name: <FaGit size={70} color='white'/>
  },
  { id:2,
    name: <div className='text-white hover:text-blue-500 hover:animate-spin w-full h-full items-center flex justify-center ease-in-out transition-all delay-100' ><FaReact size={80} /></div>
  },
  { id:3,
    name: <div className='text-white hover:text-yellow-400 w-full h-full items-center flex justify-center ease-in-out transition-all delay-100' ><SiJavascript size={80}/></div>
  },
  { id:4,
    name: <div className='text-white hover:text-green-400 w-full h-full items-center flex justify-center ease-in-out transition-all delay-100' ><FaNodeJs size={70} /></div>
  },
  { id:5,
    name: <div className='text-white hover:text-sky-500 w-full h-full items-center flex justify-center ease-in-out transition-all delay-100' ><FaDocker size={70}/></div>
  },
  { id:6,
    name: <div className='text-white hover:text-sky-300 w-full h-full items-center flex justify-center ease-in-out transition-all delay-100' ><GrMysql size={70}/></div>
  },
  { id:7,
    name: <div className='text-white hover:text-blue-500 w-full h-full items-center flex justify-center ease-in-out transition-all delay-100' ><SiTailwindcss size={70}/></div>
  },
  { id:8,
    name: <FaPython size={70} color='white'/>
  }
]

const TechComp = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-full h-5/6'>
        <div className='w-full h-1/6  flex justify-center items-center shadow-xl'>
          <span className='text-3xl text-white'>Tecnologias</span>
        </div>
        <div className='w-full h-full flex items-center justify-center md:p-4'>
          <div className='w-full sm:w-1/2 h-full grid grid-cols-2 grid-rows-4 place-items-center'>
            {imagenes.map((a) => {
              return (
                <div className='h-[10rem] w-[10rem]  md:h-[14rem] md:w-[14rem] m-10 flex justify-center items-center hover:bg-gray-950 hover:bg-opacity-40 rounded-md hover:shadow-gray-950 hover:shadow-lg text-lg font-extrabold transition-all pointer-events-auto relative' key={a.id}>
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
