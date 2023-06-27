import React, {useState} from "react";
import { blogdata } from "@/libs/types";
import BlogSection from "@/components/blogslinks";
import ErrorMessage from "@/components/error";
import Paginate from "@/components/paginated";

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakeapi-40dz.onrender.com/posts");
    const resData: blogdata[] = await res.json();
    return {
      props: {
        resData: resData as blogdata[],
      },
    };
  } catch (error: any) {
    const errorMessage = ["Fallo en la solicitud:", error.message];
    return {
      props: {
        resData: null,
      },
    };
  }
}

export default function Blog({
  resData,
}: {
  resData: blogdata[];
}) {
  const [page, setPage] = useState(1);
  console.log(page, '💜 Work in');
  
  /*Paginate Logic*/
  const initData = page;
  const itemsPerPage = 3;
  const initArray = (initData-1) * itemsPerPage
  const endArray = initArray + itemsPerPage;
  const sliceData = resData.slice(initArray,endArray);

  const setPageHandler = (event:number) =>{
    // const prop = event.target as HTMLButtonElement;
    // const propValue = prop.value;
    setPage(event)
  }
  /***************************/

  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <div className="w-screen h-full flex flex-col items-center">
        <div className="w-full h-[30vh] flex items-center justify-center bg-[#4F518C]">
          <div className="w-44 h-44 rounded-full bg-black m-4"></div>
        </div>
        <div className="w-full h-auto flex items-center justify-center bg-[#2C2A4A]">
        <div className="w-[90%] h-auto inline-grid place-items-center grid-cols-1 grid-rows-3">    
          <BlogSection resData={sliceData}/>       
        </div>
        </div>
      </div>
    </main>
  );
}
