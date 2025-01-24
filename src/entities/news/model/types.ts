import { CategoryType } from "@/entities/category";

export interface INews {
  author: string;
  description: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
  category: CategoryType[];
  id: string;
}

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string;
  }
  