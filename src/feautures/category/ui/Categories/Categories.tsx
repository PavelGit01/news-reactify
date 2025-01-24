import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoryType } from "@/entities/category";

interface Props {
  categories: CategoryType[];
  setSelectedCategory: (category: CategoryType | null) => void;
  selectCategory: CategoryType | null;
}

export const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {

    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectCategory === category ? styles.active : styles.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);
