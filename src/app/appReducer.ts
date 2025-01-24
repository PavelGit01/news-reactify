import { newsApi } from "@/entities/news/api/newsApi";
import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "@/entities/news/model/newsSlice";
import { categoryApi } from "@/entities/category/api/categoryApi";

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
