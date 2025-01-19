import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constant/constant";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { LatestNews } from "../../components/LatestNews/LatestNews";
import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters";

export const Main = () => {
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

  return (
    <main className={styles.main}>
      <LatestNews
        isLoading={isLoading}
        banners={data && data.news.length > 0 && data.news}
      />
      <NewsByFilters
        isLoading={isLoading}
        filter={filter}
        changeFilter={changeFilter}
        news={data?.news}
      />
    </main>
  );
};
