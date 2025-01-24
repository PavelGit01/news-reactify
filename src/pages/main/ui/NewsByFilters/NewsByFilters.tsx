import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { Pagination } from "@/feautures/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constant/constant";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { NewsFilters } from "../NewsFilters/NewsFilters";
import styles from "./styles.module.css";
import { NewsList } from "@/widgets/news/ui";
import { setFilters } from "@/entities/news/model/newsSlice";

export const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyWords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filter={filters} />

      <Pagination
        top={true}
        bottom={true}
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  );
};
