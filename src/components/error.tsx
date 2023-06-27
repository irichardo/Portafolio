
interface errorMessage{
    error:string[]
}

export default function ErrorMessage({error}:errorMessage){

    return  <div className="w-48 h-48 bg-slate-400">
    {error[0]}
    <p className="flex items-center justify-center">
      {error[1].toUpperCase()}
    </p>
  </div>
}