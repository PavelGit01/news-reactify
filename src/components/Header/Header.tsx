import { useContext } from "react";
import { formatDate } from "../../helpers/formatDate";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeContext";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();

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
