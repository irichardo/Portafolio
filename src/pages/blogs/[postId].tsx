import { getPagesData, getPosts } from '@/libs/posts'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighLight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import H1 from '@/components/tittle'
import P from '@/components/parrafo'

/*  styles MDX  */

import 'highlight.js/styles/github-dark.css'

/*   */
export default function PostPage ({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className='w-screen h-screen inline-grid place-items-center grid-cols-1 overflow-x-hidden'>
      <Head>
        <title>{data.frontmatter.title as string}</title>
      </Head>
      <MDXRemote
        {...data}
        components={{
          h1: H1,
          p: P
        }}
      />
    </section>
  )
}

export async function getStaticPaths () {
  const id = await getPosts()
  const postId = id?.map(a => {
    return {
      params: { postId: a.id }
    }
  })
  return { paths: postId, fallback: 'blocking' }
}

export async function getStaticProps ({ params }:any) {
  const { postId } = params
  const postFile = await getPagesData(`${postId}.mdx`)
  if (!postFile) return undefined
  const mdxSource = await serialize(postFile, { parseFrontmatter: true, mdxOptions: { rehypePlugins: [rehypeHighLight, rehypeSlug] } })
  return {
    props: {
      data: mdxSource
    },
    revalidate: 60
  }
}
