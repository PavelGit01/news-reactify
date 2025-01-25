import { useTheme } from "@/app/providers/ThemeProvider";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import { formatDate } from "@/shared/helpers/formatDate";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isDark } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to="/">
          <h1 className={styles.title}>NEWS REACTIFY</h1>
        </Link>
        <p className={styles.data}>{formatDate(new Date())}</p>
      </div>
      <ThemeSwitcher />
    </header>
  );
};
