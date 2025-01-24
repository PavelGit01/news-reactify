import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList
        news={data && data.news}
        isLoading={isLoading}
        type="banner"
        direction="row"
      />
    </section>
  );
};
