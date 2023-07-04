import { getPagesData, getPosts } from '@/libs/posts'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
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
      <section className='w-screen h-screen flex items-center justify-center bg-blue-50'>
       <Head>
        <title>{data?.frontmatter.title as string}</title>
      </Head>
      <div className='w-[70%] h-full bg-slate-100 inline-grid place-items-center grid-cols-1 overflow-x-hidden'>
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
  )
}

export async function getStaticPaths () {
  const id = await getPosts()
  const postId = id?.map((a:any) => {
    return {
      params: { postId: a.id }
    }
  })
  return { paths: postId, fallback: 'blocking' }
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
      revalidate: 9600
    }
}
