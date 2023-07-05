import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'
import { dataFromAPI } from './types'

// type Filetree = {
//   "tree": [
//       {
//           "path": string,
//       }
//   ]
// }

export async function getPostsData (postId:number) {
  try {
    const res = await fetch('http://localhost:3001/posts')
    const data = await res.json()
    const contentData = await getContentData(postId)
    return { data: data[postId - 1], contentData, totalPages: data.length }
  } catch (error:any) {
    throw new Error('Fallo en la solicitud' + ' ' + error.message)
  }
}

export async function getPostDetails () {
  const res = await fetch('http://localhost:3001/data')
  const data = await res.json()
  return data
}

export async function getContentData (props:number) {
  const res = await fetch(`http://localhost:3001/content/${props}`)
  const data = await res.json()
  return data
}

export async function getPagesByName (filename:string):Promise<any| undefined> {
  const res = await fetch(`https://raw.githubusercontent.com/irichardo/blogpost/main/${filename}`,{next:{revalidate:60},cache:'no-store',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  if (!res.ok) return undefined
  const rawData = await res.text()
  if (rawData === '404: Not found') return undefined
  const { frontmatter, content } : any = await serialize(rawData, { parseFrontmatter: true, mdxOptions: { rehypePlugins: [rehypeHighlight, rehypeSlug] } })
  const id = filename.replace(/\.mdx$/, '')
  const blogpost = { meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags, cover: frontmatter.cover ? frontmatter.cover : null, preview : frontmatter.preview? frontmatter.preview : null }, content }
  return blogpost
}

export async function getPagesData (filename:string):Promise<any| undefined> {
  try{
    const res = await fetch(`https://raw.githubusercontent.com/irichardo/blogpost/main/${filename}`, {next:{},
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    if (!res.ok) return undefined
    const rawData = await res.text()
    return rawData
  }
  catch(error:any){
    return error.message
  }
}

export async function getPosts () {
  //  solicitud a github para mapear todos los datos.
  const res = await fetch('https://api.github.com/repos/irichardo/blogpost/git/trees/main?recursive=1', {next:{revalidate:60}, cache:'no-store',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.TOKEN_GITHUB}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  if (!res.ok) return undefined
  const rawMDX = await res.json()
  const { tree } = rawMDX
  const filesArray:string[] = tree.map((files:dataFromAPI) => files.path)
    .filter((path:any) => path.endsWith('.mdx'))
  const posts:any = []
  for (const file of filesArray) {
    const post = await getPagesByName(file)
    if (posts) {
      const { meta } = post
      posts.push(meta)
    }
  }
  return posts?.sort((a:any, b:any) => { return a.date < b.date ? 1 : -1 })
}
