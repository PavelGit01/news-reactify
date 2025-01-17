import React from "react";
import styles from "./styles.module.css";

export const Categories = ({
  categories,
  setSelectedCategory,
  selectCategory,
}) => {
  return (
    <div className={styles.categories}>
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
};
