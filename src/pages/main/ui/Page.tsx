import { LatestNews } from "./LatestNews/LatestNews";
import { NewsByFilters } from "./NewsByFilters/NewsByFilters";
import styles from "./styles.module.css";

// import { NewsByFilters } from "../../components/NewsByFilters/NewsByFilters";

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};
