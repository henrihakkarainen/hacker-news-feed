export type IdsResult = {
  config: any;
  data: number[];
  headers: any;
  request: any;
  status: number;
  statusText: string;
}

export type NewsResult = {
  config: any;
  data: NewsObject;
  headers: any;
  request: any;
  status: number;
  statusText: string;
}

export type NewsObject = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
  text?: string;
}