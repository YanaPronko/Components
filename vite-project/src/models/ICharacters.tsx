export interface IResponse {
  status: 'Ok';
  data: IResponseData;
}
export interface IResponseData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
  wiki?: string;
  home?: string;
  urls?: URL[];
  comics: ComicList;
}

export interface ComicList {
  items: Items[];
}

interface URL {
  type: string;
  url: string;
}

export interface Items {
  resourceURI: string;
  name: string;
}
