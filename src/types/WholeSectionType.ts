import { NewsProp } from "./NewsProp";

export interface WholeSectionType {
  title: string;
  curationId: string;
  curationType: string;
  count: number;
  articles: NewsProp[];
}
