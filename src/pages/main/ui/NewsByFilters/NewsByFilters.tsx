import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { useGetCategoryQuery } from "@/entities/category/api/categoryApi";
import { NewsFilters } from "@/widgets/news";
import { NewsListWithPagination } from "../NewsListWithPagination/NewsListWithPagination";

export const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);

  const news = useAppSelector((state) => state.news.news);

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyWords,
  });

  const { data: dataCategories } = useGetCategoryQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters
        filter={filters}
        dataCategories={dataCategories?.categories || []}
      />

      <NewsListWithPagination
        filters={filters}
        news={news}
        isLoading={isLoading}
      />
    </section>
  );
};
