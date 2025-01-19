import React from "react";
import styles from "./styles.module.css";
import NewsList from "../NewsList/NewsList";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constant/constant";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import { useFilters } from "../../helpers/hooks/useFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";
import { PaginationWrapper } from "../PaginationWrapper/PaginationWrapper";

export const NewsByFilters = () => {
  const [filter, changeFilter] = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeyWords = useDebounce(filter.keywords, 1500);

  const { data, isLoading, error } = useFetch(getNews, {
    ...filter,
    keywords: debouncedKeyWords,
  });

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

      <PaginationWrapper
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filter.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};
