import React from "react";
import styles from "./styles.module.css";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { Slider } from "../Slider/Slider";

export const NewsFilters = ({ filter, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
            selectCategory={filter.category}
          />
        </Slider>
      )}

      <Search
        keywords={filter.keywords}
        setKeyWords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};
