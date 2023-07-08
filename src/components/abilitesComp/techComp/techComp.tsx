import {FaReact, FaNodeJs, FaDocker, FaGit, FaPython} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'

const imagenes = [
  { id:1,
    name: <FaGit size={70} color='white'/>
  },
  { id:2,
    name: <FaReact size={70} color='white'/>
  },
  { id:3,
    name: <SiJavascript size={70} color='white'/>
  },
  { id:4,
    name: <FaNodeJs size={70} color='white'/>
  },
  { id:5,
    name: <FaDocker size={70} color='white'/>
  },
  { id:6,
    name: <GrMysql size={70} color='white'/>
  },
  { id:7,
    name: <SiTailwindcss size={70} color='white'/>
  },
  { id:8,
    name: <FaPython size={70} color='white'/>
  }
]

const TechComp = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-full h-5/6 md:w-3/5 md:h-5/6'>
        <div className='w-full h-1/6  flex justify-center items-center shadow-xl'>
          <span className='text-3xl text-white'>Tecnologias</span>
        </div>
        <div className='w-full h-5/6 flex justify-center items-center'>
          <div className='w-[16rem] h-[32rem] grid grid-cols-2 gap-0'>
            {imagenes.map((a) => {
              return (
                <div className='h-[8rem] w-[8rem] flex justify-center items-center hover:bg-gray-950 hover:bg-opacity-40 rounded-md hover:shadow-gray-950 hover:shadow-lg text-lg font-extrabold transition-all' key={a.id}>
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
