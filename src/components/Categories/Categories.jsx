import React, { forwardRef } from "react";
import styles from "./styles.module.css";

export const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectCategory }, ref) => {
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
