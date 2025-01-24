import { EnhancedStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { RootState } from "../appReducer";

interface Props {
  store: EnhancedStore<RootState, any, any>; // Типизируем store,
  children: ReactNode;
}

export const NewsProvider = ({ store, children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
