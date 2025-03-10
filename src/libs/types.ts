export type blogdata = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  tags: string;
  createdAt: string;
  publishedAt: string;
  cover: ICover;
  content: string;
  // imagen: string;
  // date: string;
  // cover: string;
  // preview: string;
};

export interface ICover {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: IFormats;
}

export interface IFormats {
  medium: {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string;
    width: number;
    height: number;
    size: number;
    url: string;
  };
}

export type id = {
  id: number;
};

export type filesData = {
  filesArray: dataFromAPI[];
};

export interface dataFromAPI {
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: number;
  url: string;
}

export interface abilitiesData {
  color: string;
  abilities: string;
  id: string;
  description: string;
}

export interface paginationData {
  actualPage?: number;
  searchData?: blogdata[];
  resData?: blogdata[];
}
