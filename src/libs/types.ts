export type blogdata = {
  id:number,
  title:string,
  content:string,
  imagen:string,
  fecha:string,
  cover:string,
  preview:string
}

export type id = {
    id:number
}

export type filesData = {
  filesArray: dataFromAPI[]
}

export interface dataFromAPI {
  path: string;
  mode : string;
  type: string;
  sha: string;
  size: number;
  url: string
}

export type metadata = {
  // date 
}