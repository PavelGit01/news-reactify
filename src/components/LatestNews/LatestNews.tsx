import styles from "./styles.module.css";
import BannersList from "../BannersList/BannerList";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};
