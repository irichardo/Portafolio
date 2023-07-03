import { compileMDX } from 'next-mdx-remote/rsc'
import React from 'react'

type blogData = {
  content : React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

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

export async function getPosts () {
  const res = await fetch('https://raw.githubusercontent.com/irichardo/blogpost/main/tercerblog.mdx')
  if (!res.ok) return undefined
  const rawMDX = await res.text()
  if (rawMDX === '404: Not Found') return undefined
  // const { frontmatter, content } = await compileMDX<{tittle:string, date:string, tags:string[]}>({
  //   source: rawMDX
  // })
  // console.log(content, '👌 Test')
  // console.log(frontmatter.tittle, frontmatter.tags, '💕 Second Test')
  // console.log(rawMDX, '💜 third test')
  // const resData: blogData = { content }
  return rawMDX
}
