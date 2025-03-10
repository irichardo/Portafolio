import { getPagesData, getPosts } from '@/libs/posts';
import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighLight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

/*     htmlStylescustom */
import H1 from '@/components/markdowncustom/tittle';
import H2 from '@/components/markdowncustom/subtitle';
import P from '@/components/markdowncustom/parrafo';
import Img from '@/components/imageCompo';
import Code from '@/components/markdowncustom/code';

/*  styles MDX CODE STYLES */

import 'highlight.js/styles/atom-one-dark.css';
import LI from '@/components/markdowncustom/list';
import H3 from '@/components/markdowncustom/subtitle3';
import Layout from './DynamicLayout';
import { blogdata } from '@/libs/types';

/*   */

export default function PostPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <section className='w-screen min-h-screen flex flex-col justify-center items-center bg-gray-800 z-20'>
          <Head>
            <title>{data.frontmatter.title as string}</title>
            <meta
              name='description'
              content={`${
                data.frontmatter.meta
                  ? data.frontmatter.meta
                  : data.frontmatter.title
              }`}
            />
            <meta name='author' content='RichardHD' />
            <meta
              name='og:description'
              content={`${
                data.frontmatter.meta
                  ? data.frontmatter.meta
                  : data.frontmatter.title
              }`}
            />
          </Head>
          {/* Text & Render MDX */}
          <div className=' w-[90%] sm:w-[70%] min-h-screen inline-grid place-items-center grid-cols-1 m-10 border-2 border-white relative'>
            <MDXRemote
              {...data}
              components={{
                h1: H1,
                h2: H2,
                h3: H3,
                p: P,
                img: Img,
                code: Code,
                li: LI,
              }}
            />
          </div>
          <div className='w-full flex items-center justify-center  bottom-0'>
            <Link
              href={'/blogs'}
              className=' w-1/2 m-4 md:m-0 md:w-2/6 h-[5vh] bg-pink-600 text-white font-chakra text-lg text-center flex justify-center items-center rounded-md'
            >
              Regresar al inicio
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const id = await getPosts();
  const postId = id?.map((a: blogdata) => {
    return {
      params: { postId: a.documentId },
    };
  });
  // console.log(postId);
  return {
    paths: postId,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: any) {
  const { postId } = params;
  // console.log(postId, 'LINEA 99');
  const postFile = await getPagesData(postId);
  if (!postFile) {
    return { notFound: true };
  }
  const mdxSource = await serialize(postFile, {
    parseFrontmatter: true,
    mdxOptions: { rehypePlugins: [rehypeHighLight, rehypeSlug] },
  });
  return {
    props: {
      data: mdxSource,
    },
    revalidate: 60,
  };
}
