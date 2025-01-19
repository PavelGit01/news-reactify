import React from "react";
import styles from "./styles.module.css";
import { Pagination } from "../Pagination/Pagination";
import NewsList from "../NewsList/NewsList";
import { TOTAL_PAGES } from "../../constant/constant";
import { NewsFilters } from "../NewsFilters/NewsFilters";

export const NewsByFilters = ({ filter, changeFilter, isLoading, news }) => {
  const handleNextPage = () => {
    if (filter.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filter.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filter.page_number > 1) {
      changeFilter("page_number", filter.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filter={filter} changeFilter={changeFilter} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filter.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filter.page_number}
      />
    </section>
  );
};
