import Link from 'next/link'

export default function Custom404(){



    return(
        <section className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-1/2 h-1/2 bg-blue-200 flex flex-col shadow-md shadow-black rounded-md text-5xl font-thin">
                <div className="h-1/2 grid place-items-center">Creo que no era por aqui compañero</div>
                <div className="h-1/2 text-center text-red-700 text-7xl">ERROR 404</div>
                </div>
                <div className='h-[10%] w-1/2 flex justify-around items-center'>
                <Link href="/" className='w-40 h-16 bg-blue-500 text-center grid place-items-center rounded-lg shadow-md shadow-black hover:shadow-none hover:bg-blue-700 transition-all text-white hover:text-gray-100'> Volver al inicio</Link>
                <Link href="/blogs" className='w-40 h-16 bg-blue-500 text-center grid place-items-center rounded-lg shadow-md shadow-black hover:shadow-none hover:bg-blue-700 transition-all text-white hover:text-gray-100'> Volver al blog</Link>
                </div>
        </section>
    )
}