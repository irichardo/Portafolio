import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import { getPostsData, getPostDetails, getContentData } from "@/libs/posts";
import { MdMenu } from "react-icons/md";
import { useRouter } from "next/router";
import { blogdata, contentData } from "@/libs/types";

export async function getStaticPaths(){
    const paths = await getPostDetails();
    console.log('Solo me ejecuto cuando entro ✔');
    const parameter = await paths.map((a: any) => {
      return {
        params: { pageid: a.id },
      };
    });
  
    return {
      paths: parameter,
      fallback: false,
    };
}

export async function getStaticProps({ params }: Params) {
    const {data, contentData} = await getPostsData(params.pageid);
    console.log('Solo me ejecuto cuando entro ✔');
    return {
      props: {
        postData:data,
        contentData:contentData
      },
    };
  }
  

export default function BlogPage({ postData, contentData }: { postData: blogdata, contentData:contentData}) {
  const router = useRouter();
  const backToPage = () => {
    router.push("/blogs", undefined, { shallow: true });
  };

  return (
    <main className="w-screen h-screen overflow-x-hidden relative">
      <Head>
         <title>{`${postData.title} NextJs`}</title>
      </Head>
      <div className="w-full h-1/6 flex items-center justify-center bg-gradient-to-t from-[#570AA9] to-[#5e275b]">
        <div className="w-1/2 h-3/4 grid place-items-center text-4xl font-thin text-white">
          {postData.title}
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-[70%] h-[80vh] bg-slate-500 flex flex-col items-center">
        {
        contentData.p1 &&
        // <p className="w-full min-h-[10vh] bg-purple-500 items-center justify-center flex">
        <div className="w-full min-h-[20vh] max-h-[50vh] bg-purple-200 flex items-center justify-center">
          <p>
            {contentData.p1}
            </p>
        </div>  
        // </p>
        }
        {
        contentData.img1&&
        <div>{contentData.img1}</div>
        }
         {
        contentData.p2 &&
        // <p className="w-full min-h-[10vh] bg-purple-500 items-center justify-center flex">
        <div>
          {contentData.p2}
        </div>  
        // </p>
        }
        {
        contentData.img2&&
        <div>{contentData.img2}</div>
        }
        {
          contentData.p3&&
          <div>{contentData.p3}</div>
        }
            {
          contentData.img3&&
          <div>{contentData.img3}</div>
        }
          {/* <p className="w-5/6 h-[15%] flex items-center justify-center text-center">
            {postData.content}
          </p> */}
          {/* <p className="w-5/6 h-auto">
          </p> */}
        </div>
      </div>
      <footer className="w-full h-[10%] bg-red-950 flex items-center justify-center">
        <button className="w-1/5 h-full bg bg-purple-400 hover:bg-purple-800">
          Anterior
        </button>
        <button
          onClick={backToPage}
          className="w-1/5 h-full bg bg-purple-400 grid place-items-center hover:bg-purple-800"
        >
          <MdMenu size={30} />
        </button>
        <button className="w-1/5 h-full bg bg-purple-400 hover:bg-purple-800">
          Siguiente
        </button>
      </footer>
    </main>
  );
}
