import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeSlug from 'rehype-slug';
import { dataFromAPI } from './types';
import xmlbuilder from 'xmlbuilder';
// import { test } from 'node:test';

export async function getPagesByName(
  filename: string
): Promise<any | undefined> {
  const res = await fetch(`http://localhost:1337/api/articles/${filename}`);
  if (!res.ok) return undefined;
  const rawData = await res.text();
  if (rawData === '404: Not found') return undefined;
  const { frontmatter, content }: any = await serialize(rawData, {
    parseFrontmatter: true,
    mdxOptions: { rehypePlugins: [rehypeHighlight, rehypeSlug] },
  });
  const id = filename;
  // console.log(frontmatter.date)
  const blogpost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags ? frontmatter.tags : null,
      cover: frontmatter.cover ? frontmatter.cover : null,
      preview: frontmatter.preview ? frontmatter.preview : null,
    },
    content,
  };
  return blogpost;
}

export async function getPagesData(filename: string): Promise<any | undefined> {
  try {
    const res = await fetch(`http://localhost:1337/api/articles/${filename}`, {
      next: {},
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    });
    if (!res.ok) return undefined;
    const { data } = await res.json();
    const rawData = await data.content;
    if (!rawData) return undefined;
    // console.log(rawData);
    return rawData;
  } catch (error: any) {
    return error.message;
  }
}

export async function getPosts() {
  //  Map Data from git hub
  // const res = await fetch(
  //   'https://api.github.com/repos/irichardo/blogpost/git/trees/main?recursive=1',
  //   {
  //     next: { revalidate: 60 },
  //     cache: 'no-store',
  //     headers: {
  //       Accept: 'application/vnd.github+json',
  //       Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
  //       'X-GitHub-Api-Version': '2022-11-28',
  //     },
  //   }
  // );

  const res = await fetch('http://localhost:1337/api/articles?populate=cover', {
    next: { revalidate: 60 },
    cache: 'no-store',
    headers: {
      // Content-Type:'application/json',
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      // 'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  const { data } = await res.json();
  // console.log(data);
  if (!res.ok) return undefined;
  // const { data } = await res.json();
  // console.log(rawMDX);
  // const { tree } = rawMDX;
  /*        */
  // const filesArray: string[] = tree
  // .map((files: dataFromAPI) => files.path)
  // .filter((path: any) => path.endsWith('.mdx'));
  // const posts: any = [];
  // for (const file of data) {
  //   console.log(file);
  //   // const post = await getPagesByName(file);
  //   // if (posts) {
  //   //   const { meta } = post;
  //   //   posts.push(meta);
  //   // }
  // }
  return data?.sort((a: any, b: any) => {
    return a.createdAt < b.createdAt ? 1 : -1;
  });
}

export function generateSitemap(pages: any) {
  const root = xmlbuilder
    .create('urlset', { version: '1.0', encoding: 'UTF-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
  pages.forEach((page: any) => {
    const url = root.ele('url');
    url.ele('loc', {}, page.url);
    url.ele('lastmod', {}, page.lastModified);
    url.ele('changefreq', {}, 'daily');
    url.ele('priority', {}, '0.7');
  });
  return root;
}
