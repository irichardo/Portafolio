interface errorMessage{
    error:string[]
}

export default function ErrorMessage ({ error }:errorMessage) {
  return (
    <div className='w-96 h-48 bg-slate-400 flex-col flex justify-center items-center'>
      {error[0]}
      <p className='flex items-center justify-center text-red-600'>
        {error[1].toUpperCase()}
      </p>
    </div>
  )
}
