import { Zilla_Slab, Montserrat } from 'next/font/google'
import Image from 'next/image'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Head from 'next/head'
import { getPostsData, getPostDetails } from '@/libs/posts'
import { useRouter } from 'next/router'
import Link from 'next/link'

/*   assets  */
import { MdMenu } from 'react-icons/md'
/*  lib  */
import { blogdata, contentData } from '@/libs/types'

/*  Font  */

const font = Zilla_Slab({ weight: '300', subsets: ['latin'] })
const fontTitle = Montserrat({ subsets: ['latin'] })
/*      */

export async function getStaticPaths () {
  const paths = await getPostDetails()
  const parameter = await paths.map((a: any) => {
    return {
      params: { pageid: a.id }
    }
  })

  return {
    paths: parameter,
    fallback: false
  }
}

export async function getStaticProps ({ params }: Params) {
  const { data, contentData, totalPages } = await getPostsData(params.pageid)
  return {
    props: {
      postData: data,
      contentData,
      totalPages
    }
  }
}

export default function BlogPage ({
  postData,
  contentData,
  totalPages
} : {
  postData: blogdata;
  contentData: contentData;
  totalPages:number
}) {
  console.log(totalPages)

  return (
    <main className='w-screen h-screen overflow-x-hidden relative'>
      <Head>
        <title>{`${postData.title} | NextJs`}</title>
      </Head>
      <div className='w-full h-1/6 flex items-center justify-center bg-gradient-to-t from-[#570AA9] to-[#5e275b] shadow-lg shadow-slate-700'>
        <div
          className={`w-1/2 h-3/4 grid place-items-center text-4xl font-bold text-white ${fontTitle.className}`}
        >
          {postData.title}
        </div>
      </div>
      <div className='w-full h-auto flex flex-col items-center justify-center'>
        <div />
        <div className='w-[70%] min-h-screen m-10'>
          <div
            className={`w-full h-full grid grid-cols-1 text-2xl font-serif ${font.className}`}
          >
            {contentData.p1 && (
              <div className='flex items-center justify-center m-10'>
                <p className='w-[70%] h-[70%] flex items-center text-center justify-center'>
                  {contentData.p1}
                </p>
              </div>
            )}
            {contentData.img1 && (
              <div className='w-full h-80 relative'>
                <Image
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  className='object-contain'
                  alt='Imagen de sobre desarrollo web'
                  fill
                />
              </div>
            )}
            {contentData.p2 && (
              <div className='flex items-center justify-center text-center'>
                <p className='w-[70%] h-[70%] flex items-center justify-center text-center m-10'>
                  {contentData.p2}
                </p>
              </div>
            )}
            {contentData.img2 && (
              <div className='w-full h-80 relative'>
                <Image
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  className='object-contain'
                  alt='Imagen de sobre desarrollo web'
                  fill
                />
              </div>
            )}
            {contentData.p3 && (
              <div className='flex items-center justify-center text-center m-10'>
                <p className='w-[70%] h-[70%] flex items-center justify-center text-center'>
                  {contentData.p3}
                </p>
              </div>
            )}
            {contentData.img3 && (
              <div className='w-full h-80 relative'>
                <Image
                  src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  className='object-contain'
                  alt='Imagen de sobre desarrollo web'
                  fill
                />
              </div>
            )}
            {contentData.p4 && (
              <div className='flex items-center justify-center text-center m-10'>
                <p className='w-[70%] h-[70%] flex items-center justify-center text-center'>
                  {contentData.p4}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className='w-full h-[10%] bg-red-950 flex items-center justify-center'>
        <Link href={`/blogs/${contentData.id >= 0 ? contentData.id - 1 : contentData.id}`} className='w-1/5 h-full bg bg-purple-400 hover:bg-purple-800 flex items-center justify-center'>
          Anterior
        </Link>
        <Link
          href='/blogs'
          className='w-1/5 h-full bg bg-purple-400 grid place-items-center '
        >
          <MdMenu size={30} />
        </Link>
        <Link
          href={`/blogs/${contentData.id >= totalPages ? contentData.id : contentData.id + 1}`}
          className='w-1/5 h-full bg bg-purple-400 hover:bg-purple-800 flex items-center justify-center'
        >
          Siguiente
        </Link>
      </footer>
    </main>
  )
}

/*

strom:{

  Peso : este es el peso;
}
strom.pe;
stron.dimensiones
*/
