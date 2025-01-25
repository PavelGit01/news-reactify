import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { useGetCategoryQuery } from "@/entities/category/api/categoryApi";
import { NewsFilters } from "@/widgets/news";
import { NewsListWithPagination } from "../NewsListWithPagination/NewsListWithPagination";
import { INews } from "@/entities/news";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentNews } from "@/entities/news/model/newsSlice";

export const NewsByFilters = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };
  
  const filters = useAppSelector((state) => state.news.filters);

  const news = useAppSelector((state) => state.news.news);

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeyWords,
  });

  console.log(news);
  const { data: dataCategories } = useGetCategoryQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters
        filter={filters}
        dataCategories={dataCategories?.categories || []}
      />

      <NewsListWithPagination
        viewNewsSlot={(news: INews) => (
          <p
            className={styles.detailsButt}
            style={{ cursor: "pointer" }}
            onClick={() => navigateTo(news)}
          >
            view more...
          </p>
        )}
        filters={filters}
        news={news}
        isLoading={isLoading}
      />
    </section>
  );
};
