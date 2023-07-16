export type blogdata = {
  id:number;
  title:string;
  tags :string;
  content:string;
  imagen:string;
  date:string;
  cover:string;
  preview:string
}

export type id = {
    id:number;
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

export interface abilitiesData{
   color: string;
   abilities:string;
   id:string;
   description:string;
}

export interface paginationData{
  actualPage?:number;
  searchData?: blogdata[];
  resData?:blogdata[]
}