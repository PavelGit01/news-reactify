import React from "react";
import styles from "./styles.module.css";
import BannersList from "../BannersList/BannerList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getLatestNews } from "../../api/apiNews";

export const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList
        banners={data && data.news.length > 0 && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};
