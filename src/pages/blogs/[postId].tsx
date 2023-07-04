import { getPagesData, getPosts } from '@/libs/posts'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighLight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import H1 from '@/components/tittle'
import P from '@/components/parrafo'
// import A from '@/components/links'

/*  styles MDX  */

import 'highlight.js/styles/github-dark.css'

/*   */

export default function PostPage ({ data }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <section className='w-screen min-h-screen flex-col flex justify-center items-center bg-blue-600'>
       <Head>
        <title>{data.frontmatter.title as string}</title>
        <meta name='description' content={`${data.frontmatter.meta?data.frontmatter.meta:data.frontmatter.title}`}/>
      </Head>
      <div className='w-[70%] min-h-screen bg-slate-100 inline-grid place-items-center grid-cols-1'>
      <MDXRemote
        {...data}
        components={{
          h1: H1,
          p: P,
          // img: 
        }}
        />
      </div>
    </section>
      <div className='w-full h-full flex items-center justify-center bg-black'>
      <Link href={'/blogs'} className='w-1/6 bg-red-300 text-center'>Inicio</Link>
      </div>
      </>
  )
}

export async function getStaticPaths () {
  const id = await getPosts()
  const postId = id?.map((a:any) => {
    return {
      params: { postId: a.id }
    }
  })
  return { 
    paths: postId, 
    fallback: 'blocking',
  }
}


export async function getStaticProps ({ params }:any) {
    const { postId } = params
    const postFile = await getPagesData(`${postId}.mdx`)
    if(!postFile) {return{notFound:true}}
    const mdxSource = await serialize(postFile, { parseFrontmatter: true, mdxOptions: { rehypePlugins: [rehypeHighLight, rehypeSlug] } })
    return {
      props: {
        data: mdxSource,
      },
      revalidate: 60
    }
}
