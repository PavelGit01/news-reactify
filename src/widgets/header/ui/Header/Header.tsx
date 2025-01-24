import { useTheme } from "@/app/providers/ThemeProvider";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher/ThemeSwitcher";
import { formatDate } from "@/shared/helpers/formatDate";
import styles from "./styles.module.css";

export const Header = () => {
  const { isDark } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.data}>{formatDate(new Date())}</p>
      </div>
      <ThemeSwitcher />
    </header>
  );
};
