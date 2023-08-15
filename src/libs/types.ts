export type section_1 = {
  right:boolean | undefined,
  left:boolean | undefined
}
export type section_2 = {
    left:boolean | undefined,
    right:boolean | undefined
}

export type section_3 = {
    left: boolean | undefined,
    mid: boolean | undefined,
    right: boolean | undefined
}

export type blogData = {
  id:number;
  title:string;
  tags :string;
  content:string;
  imagen:string;
  date:string;
  cover:string;// cover : null = falso 
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
  searchData?: blogData[];
  resData?:blogData[]
}

export interface HookSize{
  about:boolean
  logo : boolean
  projects: boolean
  section_3:boolean
  section_4:boolean
}

export interface sectionSize {
  section_1: section_1
  section_2: section_2
  section_3:section_3
  changeSection_State: (arg: keyof sectionSize , section:string) => void
}
