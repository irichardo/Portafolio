import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getPostsData, getPostDetails } from "@/libs/posts";
import { MdMenu } from "react-icons/md";
import { useRouter } from "next/router";
import { blogdata } from "@/libs/types";

export async function getStaticPaths(){
  const paths = await getPostDetails();
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
  const postData = await getPostsData(params.pageid);
  return {
    props: {
      postData,
    },
  };
}

export default function BlogPage({ postData }: { postData: blogdata}) {
  const router = useRouter();

  const backToPage = () => {
    router.push("/blogs", undefined, { shallow: true });
  };

  return (
    <main className="w-screen h-screen bg-purple-700 overflow-x-hidden relative">
      <div className="w-full h-1/5 flex items-center justify-center bg-red-400">
        <div className="w-1/2 h-3/4 bg-white grid place-items-center">
          {postData.title}
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <p className="w-full min-h-[10vw] bg-purple-500 items-center justify-center flex">
          {postData.content}
        </p>
        <div className="w-[70%] h-[80vh] bg-slate-500 flex flex-col items-center">
          <p className="w-5/6 h-[15%] flex items-center justify-center bg-red-600 text-center">
            {postData.content}
          </p>
          <p className="w-5/6 h-full bg-pink-500"></p>
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
