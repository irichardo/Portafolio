import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import { dataFromAPI } from "./types";
import xmlbuilder from "xmlbuilder";

export async function getPagesByName(
  filename: string
): Promise<any | undefined> {
  const res = await fetch(
    `https://raw.githubusercontent.com/irichardo/blogpost/main/${filename}`,
    {
      next: { revalidate: 60 },
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
        "X-GitHub-Api-Version": "2022-11-28"
      },
    }
  );
  if (!res.ok) return undefined;
  const rawData = await res.text();
  if (rawData === "404: Not found") return undefined;
  const { frontmatter, content }: any = await serialize(rawData, {
    parseFrontmatter: true,
    mdxOptions: { rehypePlugins: [rehypeHighlight, rehypeSlug] },
  });
  const id = filename.replace(/\.mdx$/, "");
  // console.log(frontmatter.date)
  const blogpost = {
    meta: {
      id,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags? frontmatter.tags:null,
      cover: frontmatter.cover ? frontmatter.cover : null,
      preview: frontmatter.preview ? frontmatter.preview : null,
    },
    content,
  };
  return blogpost;
}

export async function getPagesData(filename: string): Promise<any | undefined> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/irichardo/blogpost/main/${filename}`,
      {
        next: {},
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    if (!res.ok) return undefined;
    const rawData = await res.text();
    return rawData;
  } catch (error: any) {
    return error.message;
  }
}

/*  if readme is true so search MD files    */
export async function getPosts() {
  //  Map Data from git hub
  const res = await fetch(
    "https://api.github.com/repos/irichardo/blogpost/git/trees/main?recursive=1",
    {
      next: { revalidate: 60 },
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  if (!res.ok) return undefined;
  const rawMDX = await res.json();
  const { tree } = rawMDX;
  /*        */
  const filesArray: string[] = tree
    .map((files: dataFromAPI) => files.path)
    .filter((path: any) => path.endsWith(".mdx"));
  const posts: any = [];
  for (const file of filesArray) {
    const post = await getPagesByName(file);
    if (posts) {
      const { meta } = post;
      posts.push(meta);
    }
  }
  return posts?.sort((a: any, b: any) => {
    return a.date < b.date ? 1 : -1;
  });
}

export function generateSitemap(pages: any) {
  // Generar el contenido XML del sitemap utilizando las páginas del sitio con xmlbuilder
  const root = xmlbuilder
    .create("urlset", { version: "1.0", encoding: "UTF-8" })
    .att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
  pages.forEach((page: any) => {
    const url = root.ele("url");
    url.ele("loc", {}, page.url);
    url.ele("lastmod", {}, page.lastModified);
    url.ele("changefreq", {}, "daily");
    url.ele("priority", {}, "0.7");
  });
  return root;
}
