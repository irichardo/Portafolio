import { getPosts } from "@/libs/posts";
import { generateSitemap } from "@/libs/posts";

export async function getServerSideProps({res}:any){
    const pages = await getPosts()
    const data = pages.map((a:any)=>{return{
        url:`https://www.richardhd.com/blogs/${a.id}`
      }})
      const siteMap = generateSitemap(data)
      res.setHeader('Content-Type', 'text/xml');
      res.send(siteMap.end({ pretty: true }));
}

export default getServerSideProps