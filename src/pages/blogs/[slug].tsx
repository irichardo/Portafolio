import { getPosts } from '@/libs/posts'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import H1 from '@/components/tittle'
import P from '@/components/parrafo'

export default function PostPage ({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className='w-screen h-screen inline-grid place-items-center grid-cols-1 overflow-x-hidden'>
      {/* <Head>
        <title>{source.frontmatter.title as string}</title>
      </Head> */}
      <MDXRemote
        {...source}
        // specifying the custom MDX components
        components={{
          h1: H1,
          p: P
          // p: P,
          // HeroImage,
        }}
      />
    </main>
  )
}

export async function getStaticPaths () {
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps (
  ctx: GetStaticPropsContext<{
    slug: string
  }>
) {
  // const { slug } = 'yes'

  // retrieve the MDX blog post file associated
  // with the specified slug parameter

  const postFile = await getPosts()
  // fs.readFileSync(`_posts/${slug}.mdx`)
  if (!postFile) return undefined
  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true })
  return {
    props: {
      source: mdxSource
    },
    // enable ISR
    revalidate: 60
  }
}
