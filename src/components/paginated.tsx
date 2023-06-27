import { blogdata } from "@/libs/types";

export default function Paginate ({resData}:{resData:blogdata[]}){  
    const inded:any = [];

    const init = 1;
    const elementsPerPage = 3
    const initArray = (init-1) * elementsPerPage;
    const endArray = init + elementsPerPage;
    const data = Math.ceil(resData.length/elementsPerPage);
    // const currentPage = resData.slice(initArray,endArray);
    
    for(let i = 1 ; i < data+1; i++){
      inded.push(<div key={i}>{i}</div>)
    }
    console.log(inded,'💜');
    
    return(
      <div className="flex">{inded}</div>
    )
}