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

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoryType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface IPaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}

export interface CategoriesApiResponse {
  categories: CategoryType[];
  descriptions: string;
  status: string;
}

export type CategoryType =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "celebrity"
  | "medical"
  | "energy"
  | "gadgets"
  | "design"
  | "EE"
  | "review"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
