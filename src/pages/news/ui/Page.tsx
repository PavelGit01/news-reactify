import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appStore";
import { NewsDetails } from "@/entities/news";

export const NewsPage = () => {
  const currentNews = useAppSelector((state) => state.news.currentNews);
  if (!currentNews) {
    return (
      <div>
        <h1>Cannot find news</h1>
        <Link to="/">
          <p>Back to all news</p>
        </Link>
      </div>
    );
  }
  return (
    <main className={styles.news}>
      <h1>{currentNews.title}</h1>
      <NewsDetails item={currentNews} />
    </main>
  );
};
