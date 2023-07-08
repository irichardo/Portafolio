export type blogdata = {
  id:number,
  title:string,
  content:string,
  imagen:string,
  date:string,
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

export interface circleData{
   color: string
   abilities:string,
   id:string
}