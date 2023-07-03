import { blogdata } from '@/libs/types'
import React, { EventHandler } from 'react'

export default function Paginate ({ resData, setPaginated, actualPage }:{resData:blogdata[], setPaginated:EventHandler< any | number>, actualPage:number}) {
  // const [actualPage,setActualPage] = useState(0);

  const inded:React.JSX.Element[] = []
  const elementsPerPage = 3
  const data = Math.ceil(resData?.length / elementsPerPage)

  const handleSetActualPageSetPagination = (event:React.MouseEvent<HTMLButtonElement>) => {
    const data = event.target as HTMLButtonElement
    const value = data.value
    setPaginated(Number(value))
    // setActualPage(Number(value))
  }

  for (let i = 1; i < data + 1; i++) {
    inded.push(
      <li className='w-8 h-8 transition-all m-4 relative z-30' key={i}>
        <span className={`z-20 w-full h-full flex items-center justify-center absolute top-0 pointer-events-none ${actualPage === i ? 'text-white' : 'text-black'} transition-colors `}>{i}</span>
        <button className={`w-full h-full absolute  rounded-sm top-0 ${actualPage === i ? 'rotate-0 bg-red-800' : 'rotate-45 bg-white'} transition-all z-10 hover:rotate-0 hover:transition-transform pointer-events-auto`} key={i} value={i} onClick={handleSetActualPageSetPagination} />
      </li>)
  }
  return (
    <ul className='flex items-center justify-center w-1/3 m-2 bg-white rounded-xl absolute bottom-0 border-2 border-gray-500 opacity-30 hover:opacity-100 transition-opacity delay-75'>
      {inded}
    </ul>
  )
}
