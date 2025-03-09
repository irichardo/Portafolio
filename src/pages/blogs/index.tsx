import React, { useContext, useState } from 'react';
import { blogdata } from '@/libs/types';
import BlogCards from '@/components/blogscards';
import ErrorMessage from '@/components/error';
import Paginate from '@/components/utils/paginated';
import { getPosts } from '@/libs/posts';
import Layout from './layout';
import ParallaxBackground from '@/components/parallax/parallaxBackground';
import { GlobalContext } from '@/context/GlobalContext';

//request static props data

export const revalidate = 10;

export async function getStaticProps() {
  try {
    const allpages = await getPosts();
    /*  transform all elements using set to be used later as an index  */
    const tags = Array.from(new Set(allpages.map((a: any) => a.tags).flat()));
    return {
      props: {
        resData: allpages,
        tags,
        error: null,
      },
      revalidate: 60,
    };
  } catch (error: any) {
    const errorMessage = ['Fallo en la solicitud:', error.message];
    return {
      props: {
        resData: null,
        error: errorMessage,
      },
    };
  }
}

/*BLOG PAGE */

export default function Blog({
  resData,
  // tags,
  error,
}: {
  resData: blogdata[];
  tags: string[];
  error: any;
}) {
  //context for create a persistance pagination
  const { actualPage, setActualPage } = useContext(GlobalContext);
  const [tag, setTag] = useState<blogdata[]>([]);

  /* Paginate Logic */
  const initData = actualPage;
  const itemsPerPage = 3;
  const initArray = (initData - 1) * itemsPerPage;
  const endArray = initArray + itemsPerPage;
  const sliceData = tag.length
    ? tag.slice(initArray, endArray)
    : resData?.slice(initArray, endArray);

  /*      pagination handler         */
  const setPageHandler = (event: number) => {
    setActualPage(event);
  };
  /*********  tags hanlder  ********/
  const tagHandler = (event: any) => {
    if (event.target.value === 'clean') {
      setTag([]);
      setActualPage(0);
    }
    const filterData = resData.filter((a) =>
      a.tags.includes(event.target.value)
    );
    setTag(filterData);
    setActualPage(1);
  };
  /*********************************/

  return (
    <Layout>
      <div className='w-screen min-h-screen font-chakra'>
        <div className='w-screen  flex-col items-center flex'>
          <div className='w-full h-[30vh] sm:h-[40vh]  flex items-center justify-center bg-gray-950'>
            {/*      LOGO      */}
            <ParallaxBackground />
          </div>
          <div className='w-full min-h-[50vh] flex justify-center'>
            {/*     BLOGS      */}
            <div
              className={`w-full lg:w-[90%] grid-cols-1 place-items-center grid-rows-1
                // {/* dynamic css  */}
                // sliceData.length
                
              } inline-grid
              `}
            >
              {error ? (
                <ErrorMessage error={error} />
              ) : (
                /* verifying the existence of tags for rendering */
                <BlogCards resData={sliceData} />
              )}
            </div>
            {/******************************************************************************/}
            {/* search & tags  */}
            {/* <div className="w-2/12 h-full inline-flex flex-wrap font-chakra">
              <ul className="flex flex-wrap">
                <button
                  type="button"
                  value="clean"
                  className="h-auto flex-wrap m-2 bg-purple-400 shadow-md  text-white rounded-md p-3 hover:shadow-none"
                  onClick={tagHandler}
                >
                  Limpiar filtros
                </button>
                {tags.map((tag) => (
                  <li key={tag}>
                    <button
                      type="button"
                      value={tag}
                      onClick={tagHandler}
                      className=" h-auto flex-wrap m-2 bg-white text-black rounded-md p-3 hover:shadow-none"
                    >
                      {tag}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          {resData?.length > itemsPerPage && (
            /* verifiying exist of resData & tag.length,  Send data length  */
            <Paginate
              resData={tag.length ? tag.length : resData.length}
              setPaginated={setPageHandler}
              actualPage={actualPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
