import React from "react";
import styles from "./styles.module.css";
import BannersList from "../BannersList/BannerList";

export const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};
