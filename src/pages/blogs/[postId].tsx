import { getPagesData, getPosts } from '@/libs/posts'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighLight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import { useEffect, useState } from 'react'
import { useScroll } from 'framer-motion'

/*     htmlStylescustom */
import H1 from '@/components/markdowncustom/tittle'
import H2 from '@/components/markdowncustom/subtitle'
import P from '@/components/markdowncustom/parrafo'
import img from '@/components/imageCompo'
import Code from '@/components/markdowncustom/code'

/*  styles MDX CODE STYLES */

import 'highlight.js/styles/atom-one-dark.css'

/*   */

export default function PostPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {

  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useEffect(()=>{
    // hook into the onChange, store the current value as state.
    scrollYProgress.onChange(v=> setHookedYPosition(v));
  },[scrollYProgress]); //make sure to re-subscriobe when scrollYProgress changes
  

  return (
      <>
      <span className='w-full h-2 fixed flex items-center justify-center z-50'><div className={`transition-all ease-in-out delay-[0.5ms] h-full bg-red-400`} style={{width:`${hookedYPostion*100}%`}}></div></span>
      <section className='w-screen min-h-screen flex flex-col justify-center items-center bg-gray-800 z-20'>
        <Head>
          <title>{data.frontmatter.title as string}</title>
          <meta name='description' content={`${data.frontmatter.meta ? data.frontmatter.meta : data.frontmatter.title}`} />
          <meta name='autohr' content='RichardHD'/>
        </Head>
        {/* Text & Render MDX */}
        <div className=' w-[90%] sm:w-[70%] min-h-screen inline-grid place-items-center grid-cols-1 m-10 border-2 border-white relative'>
          <MDXRemote
            {...data}
            components={{
              h1: H1,
              h2: H2,
              p: P,
              img: img,
              code: Code,
            }}
          />
        </div>
      </section>
      <div className='w-full flex items-center justify-center fixed bottom-0'>
        <Link href={'/blogs'} className='w-1/6 h-[5vh] bg-red-300 text-center flex justify-center items-center'>Inicio</Link>
      </div>
      </>
  )
}

export async function getStaticPaths() {
  const id = await getPosts()
  const postId = id?.map((a: any) => {
    return {
      params: { postId: a.id }
    }
  })
  return {
    paths: postId,
    fallback: 'blocking',
  }
}


export async function getStaticProps({ params }: any) {
  const { postId } = params
  const postFile = await getPagesData(`${postId}.mdx`)
  if (!postFile) { return { notFound: true } }
  const mdxSource = await serialize(postFile, { parseFrontmatter: true, mdxOptions: { rehypePlugins: [rehypeHighLight, rehypeSlug] } })
  return {
    props: {
      data: mdxSource,
    },
    revalidate: 60
  }
}
