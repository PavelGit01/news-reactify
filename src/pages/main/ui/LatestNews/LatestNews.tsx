import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import { INews } from "@/entities/news";
import { useDispatch } from "react-redux";
import { setCurrentNews } from "@/entities/news/model/newsSlice";
import { useNavigate } from "react-router-dom";

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`);
  };

  return (
    <section className={styles.section}>
      <NewsList
        news={data && data.news}
        isLoading={isLoading}
        type="banner"
        direction="row"
        viewNewsSlot={(news: INews) => (
          <p
            className={styles.detailsButt}
            style={{ cursor: "pointer" }}
            onClick={() => navigateTo(news)}
          >
            view more...
          </p>
        )}
      />
    </section>
  );
};
